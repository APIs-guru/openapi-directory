import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
import { ParagraphStyle } from "./paragraphstyle";
import { Range } from "./range";



// UpdateParagraphStyleRequest
/** 
 * Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range.
**/
export class UpdateParagraphStyleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: ParagraphStyle;

  @SpeakeasyMetadata({ data: "json, name=textRange" })
  textRange?: Range;
}
