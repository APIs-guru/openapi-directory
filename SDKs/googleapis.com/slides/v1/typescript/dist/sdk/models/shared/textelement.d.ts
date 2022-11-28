import { SpeakeasyBase } from "../../../internal/utils";
import { AutoText } from "./autotext";
import { ParagraphMarker } from "./paragraphmarker";
import { TextRun } from "./textrun";
/**
 * A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.
**/
export declare class TextElement extends SpeakeasyBase {
    autoText?: AutoText;
    endIndex?: number;
    paragraphMarker?: ParagraphMarker;
    startIndex?: number;
    textRun?: TextRun;
}
