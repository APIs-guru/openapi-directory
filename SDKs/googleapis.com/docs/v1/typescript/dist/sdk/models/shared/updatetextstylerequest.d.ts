import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { TextStyle } from "./textstyle";
/**
 * Update the styling of text.
**/
export declare class UpdateTextStyleRequest extends SpeakeasyBase {
    fields?: string;
    range?: Range;
    textStyle?: TextStyle;
}
