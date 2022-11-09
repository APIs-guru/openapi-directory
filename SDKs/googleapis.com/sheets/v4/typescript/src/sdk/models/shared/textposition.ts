import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TextPositionHorizontalAlignmentEnum {
    HorizontalAlignUnspecified = "HORIZONTAL_ALIGN_UNSPECIFIED"
,    Left = "LEFT"
,    Center = "CENTER"
,    Right = "RIGHT"
}


// TextPosition
/** 
 * Position settings for text.
**/
export class TextPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=horizontalAlignment" })
  horizontalAlignment?: TextPositionHorizontalAlignmentEnum;
}
