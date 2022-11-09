import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableRange } from "./tablerange";


// UnmergeTableCellsRequest
/** 
 * Unmerges cells in a Table.
**/
export class UnmergeTableCellsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=tableRange" })
  tableRange?: TableRange;
}
