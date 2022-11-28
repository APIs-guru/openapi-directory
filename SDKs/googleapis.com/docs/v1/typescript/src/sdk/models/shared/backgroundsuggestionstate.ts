import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackgroundSuggestionState
/** 
 * A mask that indicates which of the fields on the base Background have been changed in this suggestion. For any field set to true, the Backgound has a new suggested value.
**/
export class BackgroundSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColorSuggested" })
  backgroundColorSuggested?: boolean;
}
