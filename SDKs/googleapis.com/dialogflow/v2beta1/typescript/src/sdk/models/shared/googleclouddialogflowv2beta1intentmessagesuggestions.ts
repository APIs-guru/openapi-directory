import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageSuggestion } from "./googleclouddialogflowv2beta1intentmessagesuggestion";



// GoogleCloudDialogflowV2beta1IntentMessageSuggestions
/** 
 * The collection of suggestions.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageSuggestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestions", elemType: GoogleCloudDialogflowV2beta1IntentMessageSuggestion })
  suggestions?: GoogleCloudDialogflowV2beta1IntentMessageSuggestion[];
}
