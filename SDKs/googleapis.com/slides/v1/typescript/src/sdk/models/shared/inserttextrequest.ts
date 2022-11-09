import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellLocation } from "./tablecelllocation";


// InsertTextRequest
/** 
 * Inserts text into a shape or a table cell.
**/
export class InsertTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @Metadata({ data: "json, name=insertionIndex" })
  insertionIndex?: number;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
