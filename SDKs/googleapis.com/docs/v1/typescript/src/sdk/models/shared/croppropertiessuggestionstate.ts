import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CropPropertiesSuggestionState
/** 
 * A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class CropPropertiesSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=angleSuggested" })
  angleSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=offsetBottomSuggested" })
  offsetBottomSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=offsetLeftSuggested" })
  offsetLeftSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=offsetRightSuggested" })
  offsetRightSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=offsetTopSuggested" })
  offsetTopSuggested?: boolean;
}
