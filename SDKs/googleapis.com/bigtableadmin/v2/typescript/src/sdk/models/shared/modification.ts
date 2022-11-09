import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ColumnFamily } from "./columnfamily";
import { ColumnFamily } from "./columnfamily";


// Modification
/** 
 * A create, update, or delete of a particular column family.
**/
export class Modification extends SpeakeasyBase {
  @Metadata({ data: "json, name=create" })
  create?: ColumnFamily;

  @Metadata({ data: "json, name=drop" })
  drop?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=update" })
  update?: ColumnFamily;
}
