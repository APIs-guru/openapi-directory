import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRange } from "./tablerange";



// MergeTableCellsRequest
/** 
 * Merges cells in a Table.
**/
export class MergeTableCellsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tableRange" })
  tableRange?: TableRange;
}
