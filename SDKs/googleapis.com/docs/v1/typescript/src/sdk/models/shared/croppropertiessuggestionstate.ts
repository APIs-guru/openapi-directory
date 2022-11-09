import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CropPropertiesSuggestionState
/** 
 * A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class CropPropertiesSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=angleSuggested" })
  angleSuggested?: boolean;

  @Metadata({ data: "json, name=offsetBottomSuggested" })
  offsetBottomSuggested?: boolean;

  @Metadata({ data: "json, name=offsetLeftSuggested" })
  offsetLeftSuggested?: boolean;

  @Metadata({ data: "json, name=offsetRightSuggested" })
  offsetRightSuggested?: boolean;

  @Metadata({ data: "json, name=offsetTopSuggested" })
  offsetTopSuggested?: boolean;
}
