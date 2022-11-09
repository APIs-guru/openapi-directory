import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParagraphStyleSuggestionState } from "./paragraphstylesuggestionstate";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";

export enum NamedStyleSuggestionStateNamedStyleTypeEnum {
    NamedStyleTypeUnspecified = "NAMED_STYLE_TYPE_UNSPECIFIED"
,    NormalText = "NORMAL_TEXT"
,    Title = "TITLE"
,    Subtitle = "SUBTITLE"
,    Heading1 = "HEADING_1"
,    Heading2 = "HEADING_2"
,    Heading3 = "HEADING_3"
,    Heading4 = "HEADING_4"
,    Heading5 = "HEADING_5"
,    Heading6 = "HEADING_6"
}


// NamedStyleSuggestionState
/** 
 * A suggestion state of a NamedStyle message.
**/
export class NamedStyleSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=namedStyleType" })
  namedStyleType?: NamedStyleSuggestionStateNamedStyleTypeEnum;

  @Metadata({ data: "json, name=paragraphStyleSuggestionState" })
  paragraphStyleSuggestionState?: ParagraphStyleSuggestionState;

  @Metadata({ data: "json, name=textStyleSuggestionState" })
  textStyleSuggestionState?: TextStyleSuggestionState;
}
