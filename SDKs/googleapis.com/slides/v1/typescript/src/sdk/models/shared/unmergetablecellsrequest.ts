import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRange } from "./tablerange";



// UnmergeTableCellsRequest
/** 
 * Unmerges cells in a Table.
**/
export class UnmergeTableCellsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableRange" })
  tableRange?: TableRange;
}
