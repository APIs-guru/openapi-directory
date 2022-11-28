import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnFamily } from "./columnfamily";



// Modification
/** 
 * A create, update, or delete of a particular column family.
**/
export class Modification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=create" })
  create?: ColumnFamily;

  @SpeakeasyMetadata({ data: "json, name=drop" })
  drop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: ColumnFamily;
}
