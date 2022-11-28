import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageSuggestion } from "./googleclouddialogflowv2intentmessagesuggestion";



// GoogleCloudDialogflowV2IntentMessageSuggestions
/** 
 * The collection of suggestions.
**/
export class GoogleCloudDialogflowV2IntentMessageSuggestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestions", elemType: GoogleCloudDialogflowV2IntentMessageSuggestion })
  suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestion[];
}
