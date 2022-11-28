import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TextPositionHorizontalAlignmentEnum {
    HorizontalAlignUnspecified = "HORIZONTAL_ALIGN_UNSPECIFIED",
    Left = "LEFT",
    Center = "CENTER",
    Right = "RIGHT"
}


// TextPosition
/** 
 * Position settings for text.
**/
export class TextPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=horizontalAlignment" })
  horizontalAlignment?: TextPositionHorizontalAlignmentEnum;
}
