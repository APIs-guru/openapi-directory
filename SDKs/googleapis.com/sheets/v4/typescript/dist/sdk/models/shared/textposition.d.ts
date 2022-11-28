import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TextPositionHorizontalAlignmentEnum {
    HorizontalAlignUnspecified = "HORIZONTAL_ALIGN_UNSPECIFIED",
    Left = "LEFT",
    Center = "CENTER",
    Right = "RIGHT"
}
/**
 * Position settings for text.
**/
export declare class TextPosition extends SpeakeasyBase {
    horizontalAlignment?: TextPositionHorizontalAlignmentEnum;
}
