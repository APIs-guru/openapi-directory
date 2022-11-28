import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoText } from "./autotext";
import { ParagraphMarker } from "./paragraphmarker";
import { TextRun } from "./textrun";



// TextElement
/** 
 * A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.
**/
export class TextElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoText" })
  autoText?: AutoText;

  @SpeakeasyMetadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=paragraphMarker" })
  paragraphMarker?: ParagraphMarker;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=textRun" })
  textRun?: TextRun;
}
