import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextStyle } from "./textstyle";


export enum AutoTextTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    SlideNumber = "SLIDE_NUMBER"
}


// AutoText
/** 
 * A TextElement kind that represents auto text.
**/
export class AutoText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: TextStyle;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AutoTextTypeEnum;
}
