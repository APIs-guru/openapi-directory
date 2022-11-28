import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParagraphStyle } from "./paragraphstyle";
import { TextStyle } from "./textstyle";


export enum NamedStyleNamedStyleTypeEnum {
    NamedStyleTypeUnspecified = "NAMED_STYLE_TYPE_UNSPECIFIED",
    NormalText = "NORMAL_TEXT",
    Title = "TITLE",
    Subtitle = "SUBTITLE",
    Heading1 = "HEADING_1",
    Heading2 = "HEADING_2",
    Heading3 = "HEADING_3",
    Heading4 = "HEADING_4",
    Heading5 = "HEADING_5",
    Heading6 = "HEADING_6"
}


// NamedStyle
/** 
 * A named style. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from this named style when they have the same named style type.
**/
export class NamedStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namedStyleType" })
  namedStyleType?: NamedStyleNamedStyleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=paragraphStyle" })
  paragraphStyle?: ParagraphStyle;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
