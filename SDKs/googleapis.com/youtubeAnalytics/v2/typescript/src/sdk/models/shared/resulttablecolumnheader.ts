import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResultTableColumnHeader
/** 
 * The description of a column of the result table.
**/
export class ResultTableColumnHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnType" })
  columnType?: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
