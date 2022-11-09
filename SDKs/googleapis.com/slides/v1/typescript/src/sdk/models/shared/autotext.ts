import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextStyle } from "./textstyle";

export enum AutoTextTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    SlideNumber = "SLIDE_NUMBER"
}


// AutoText
/** 
 * A TextElement kind that represents auto text.
**/
export class AutoText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=style" })
  style?: TextStyle;

  @Metadata({ data: "json, name=type" })
  type?: AutoTextTypeEnum;
}
