import { SpeakeasyBase } from "../../../internal/utils";
import { CropPropertiesSuggestionState } from "./croppropertiessuggestionstate";
/**
 * A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class ImagePropertiesSuggestionState extends SpeakeasyBase {
    angleSuggested?: boolean;
    brightnessSuggested?: boolean;
    contentUriSuggested?: boolean;
    contrastSuggested?: boolean;
    cropPropertiesSuggestionState?: CropPropertiesSuggestionState;
    sourceUriSuggested?: boolean;
    transparencySuggested?: boolean;
}
