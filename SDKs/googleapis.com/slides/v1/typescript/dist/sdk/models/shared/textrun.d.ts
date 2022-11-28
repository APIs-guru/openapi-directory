import { SpeakeasyBase } from "../../../internal/utils";
import { TextStyle } from "./textstyle";
/**
 * A TextElement kind that represents a run of text that all has the same styling.
**/
export declare class TextRun extends SpeakeasyBase {
    content?: string;
    style?: TextStyle;
}
