import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextStyleSuggestionState
/** 
 * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class TextStyleSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColorSuggested" })
  backgroundColorSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=baselineOffsetSuggested" })
  baselineOffsetSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=boldSuggested" })
  boldSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fontSizeSuggested" })
  fontSizeSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=foregroundColorSuggested" })
  foregroundColorSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=italicSuggested" })
  italicSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=linkSuggested" })
  linkSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=smallCapsSuggested" })
  smallCapsSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=strikethroughSuggested" })
  strikethroughSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=underlineSuggested" })
  underlineSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=weightedFontFamilySuggested" })
  weightedFontFamilySuggested?: boolean;
}
