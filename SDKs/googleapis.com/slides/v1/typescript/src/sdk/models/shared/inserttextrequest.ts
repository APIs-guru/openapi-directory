import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";



// InsertTextRequest
/** 
 * Inserts text into a shape or a table cell.
**/
export class InsertTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @SpeakeasyMetadata({ data: "json, name=insertionIndex" })
  insertionIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
