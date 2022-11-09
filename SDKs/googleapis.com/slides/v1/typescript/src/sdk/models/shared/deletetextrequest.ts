import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellLocation } from "./tablecelllocation";
import { Range } from "./range";


// DeleteTextRequest
/** 
 * Deletes text from a shape or a table cell.
**/
export class DeleteTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=textRange" })
  textRange?: Range;
}
