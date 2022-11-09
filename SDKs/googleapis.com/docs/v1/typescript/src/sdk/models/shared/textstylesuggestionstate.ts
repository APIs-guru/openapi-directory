import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextStyleSuggestionState
/** 
 * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class TextStyleSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColorSuggested" })
  backgroundColorSuggested?: boolean;

  @Metadata({ data: "json, name=baselineOffsetSuggested" })
  baselineOffsetSuggested?: boolean;

  @Metadata({ data: "json, name=boldSuggested" })
  boldSuggested?: boolean;

  @Metadata({ data: "json, name=fontSizeSuggested" })
  fontSizeSuggested?: boolean;

  @Metadata({ data: "json, name=foregroundColorSuggested" })
  foregroundColorSuggested?: boolean;

  @Metadata({ data: "json, name=italicSuggested" })
  italicSuggested?: boolean;

  @Metadata({ data: "json, name=linkSuggested" })
  linkSuggested?: boolean;

  @Metadata({ data: "json, name=smallCapsSuggested" })
  smallCapsSuggested?: boolean;

  @Metadata({ data: "json, name=strikethroughSuggested" })
  strikethroughSuggested?: boolean;

  @Metadata({ data: "json, name=underlineSuggested" })
  underlineSuggested?: boolean;

  @Metadata({ data: "json, name=weightedFontFamilySuggested" })
  weightedFontFamilySuggested?: boolean;
}
