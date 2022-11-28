import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsCardV1SuggestionItem
/** 
 * One suggested value that users can enter in a text input field.
**/
export class GoogleAppsCardV1SuggestionItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
