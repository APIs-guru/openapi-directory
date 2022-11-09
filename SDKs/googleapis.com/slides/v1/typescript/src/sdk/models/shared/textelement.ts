import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoText } from "./autotext";
import { ParagraphMarker } from "./paragraphmarker";
import { TextRun } from "./textrun";


// TextElement
/** 
 * A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.
**/
export class TextElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoText" })
  autoText?: AutoText;

  @Metadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @Metadata({ data: "json, name=paragraphMarker" })
  paragraphMarker?: ParagraphMarker;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=textRun" })
  textRun?: TextRun;
}
