import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CropPropertiesSuggestionState } from "./croppropertiessuggestionstate";


// ImagePropertiesSuggestionState
/** 
 * A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class ImagePropertiesSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=angleSuggested" })
  angleSuggested?: boolean;

  @Metadata({ data: "json, name=brightnessSuggested" })
  brightnessSuggested?: boolean;

  @Metadata({ data: "json, name=contentUriSuggested" })
  contentUriSuggested?: boolean;

  @Metadata({ data: "json, name=contrastSuggested" })
  contrastSuggested?: boolean;

  @Metadata({ data: "json, name=cropPropertiesSuggestionState" })
  cropPropertiesSuggestionState?: CropPropertiesSuggestionState;

  @Metadata({ data: "json, name=sourceUriSuggested" })
  sourceUriSuggested?: boolean;

  @Metadata({ data: "json, name=transparencySuggested" })
  transparencySuggested?: boolean;
}
