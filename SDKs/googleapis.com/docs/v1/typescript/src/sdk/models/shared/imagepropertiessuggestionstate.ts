import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CropPropertiesSuggestionState } from "./croppropertiessuggestionstate";



// ImagePropertiesSuggestionState
/** 
 * A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class ImagePropertiesSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=angleSuggested" })
  angleSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=brightnessSuggested" })
  brightnessSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contentUriSuggested" })
  contentUriSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contrastSuggested" })
  contrastSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cropPropertiesSuggestionState" })
  cropPropertiesSuggestionState?: CropPropertiesSuggestionState;

  @SpeakeasyMetadata({ data: "json, name=sourceUriSuggested" })
  sourceUriSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=transparencySuggested" })
  transparencySuggested?: boolean;
}
