import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsCardV1SuggestionItem } from "./googleappscardv1suggestionitem";


// GoogleAppsCardV1Suggestions
/** 
 * A container wrapping elements necessary for showing suggestion items used in text input autocomplete.
**/
export class GoogleAppsCardV1Suggestions extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.GoogleAppsCardV1SuggestionItem })
  items?: GoogleAppsCardV1SuggestionItem[];
}
