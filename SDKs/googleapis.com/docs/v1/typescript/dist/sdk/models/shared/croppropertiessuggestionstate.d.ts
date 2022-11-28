import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class CropPropertiesSuggestionState extends SpeakeasyBase {
    angleSuggested?: boolean;
    offsetBottomSuggested?: boolean;
    offsetLeftSuggested?: boolean;
    offsetRightSuggested?: boolean;
    offsetTopSuggested?: boolean;
}
