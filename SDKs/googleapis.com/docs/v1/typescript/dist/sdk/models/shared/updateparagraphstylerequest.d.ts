import { SpeakeasyBase } from "../../../internal/utils";
import { ParagraphStyle } from "./paragraphstyle";
import { Range } from "./range";
/**
 * Update the styling of all paragraphs that overlap with the given range.
**/
export declare class UpdateParagraphStyleRequest extends SpeakeasyBase {
    fields?: string;
    paragraphStyle?: ParagraphStyle;
    range?: Range;
}
