import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResultTableColumnHeader
/** 
 * The description of a column of the result table.
**/
export class ResultTableColumnHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnType" })
  columnType?: string;

  @Metadata({ data: "json, name=dataType" })
  dataType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
