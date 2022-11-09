import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableRange } from "./tablerange";


// MergeTableCellsRequest
/** 
 * Merges cells in a Table.
**/
export class MergeTableCellsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=tableRange" })
  tableRange?: TableRange;
}
