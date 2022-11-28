import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";



// BulletSuggestionState
/** 
 * A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class BulletSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listIdSuggested" })
  listIdSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nestingLevelSuggested" })
  nestingLevelSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=textStyleSuggestionState" })
  textStyleSuggestionState?: TextStyleSuggestionState;
}
