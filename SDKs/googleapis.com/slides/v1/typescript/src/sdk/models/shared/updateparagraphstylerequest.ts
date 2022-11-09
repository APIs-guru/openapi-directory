import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellLocation } from "./tablecelllocation";
import { ParagraphStyle } from "./paragraphstyle";
import { Range } from "./range";


// UpdateParagraphStyleRequest
/** 
 * Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range.
**/
export class UpdateParagraphStyleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=style" })
  style?: ParagraphStyle;

  @Metadata({ data: "json, name=textRange" })
  textRange?: Range;
}
