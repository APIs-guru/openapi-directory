import { SpeakeasyBase } from "../../../internal/utils";
import { TextStyle } from "./textstyle";
export declare enum AutoTextTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    SlideNumber = "SLIDE_NUMBER"
}
/**
 * A TextElement kind that represents auto text.
**/
export declare class AutoText extends SpeakeasyBase {
    content?: string;
    style?: TextStyle;
    type?: AutoTextTypeEnum;
}
