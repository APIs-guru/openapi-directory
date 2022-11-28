import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";



// NestingLevelSuggestionState
/** 
 * A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class NestingLevelSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bulletAlignmentSuggested" })
  bulletAlignmentSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=glyphFormatSuggested" })
  glyphFormatSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=glyphSymbolSuggested" })
  glyphSymbolSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=glyphTypeSuggested" })
  glyphTypeSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=indentFirstLineSuggested" })
  indentFirstLineSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=indentStartSuggested" })
  indentStartSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startNumberSuggested" })
  startNumberSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=textStyleSuggestionState" })
  textStyleSuggestionState?: TextStyleSuggestionState;
}
