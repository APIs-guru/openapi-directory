import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";


// BulletSuggestionState
/** 
 * A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class BulletSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=listIdSuggested" })
  listIdSuggested?: boolean;

  @Metadata({ data: "json, name=nestingLevelSuggested" })
  nestingLevelSuggested?: boolean;

  @Metadata({ data: "json, name=textStyleSuggestionState" })
  textStyleSuggestionState?: TextStyleSuggestionState;
}
