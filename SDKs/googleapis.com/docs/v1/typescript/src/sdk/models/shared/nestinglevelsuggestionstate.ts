import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";


// NestingLevelSuggestionState
/** 
 * A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class NestingLevelSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=bulletAlignmentSuggested" })
  bulletAlignmentSuggested?: boolean;

  @Metadata({ data: "json, name=glyphFormatSuggested" })
  glyphFormatSuggested?: boolean;

  @Metadata({ data: "json, name=glyphSymbolSuggested" })
  glyphSymbolSuggested?: boolean;

  @Metadata({ data: "json, name=glyphTypeSuggested" })
  glyphTypeSuggested?: boolean;

  @Metadata({ data: "json, name=indentFirstLineSuggested" })
  indentFirstLineSuggested?: boolean;

  @Metadata({ data: "json, name=indentStartSuggested" })
  indentStartSuggested?: boolean;

  @Metadata({ data: "json, name=startNumberSuggested" })
  startNumberSuggested?: boolean;

  @Metadata({ data: "json, name=textStyleSuggestionState" })
  textStyleSuggestionState?: TextStyleSuggestionState;
}
