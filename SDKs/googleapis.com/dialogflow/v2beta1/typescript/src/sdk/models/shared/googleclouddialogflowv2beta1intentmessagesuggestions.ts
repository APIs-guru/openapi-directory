import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessageSuggestion } from "./googleclouddialogflowv2beta1intentmessagesuggestion";


// GoogleCloudDialogflowV2beta1IntentMessageSuggestions
/** 
 * The collection of suggestions.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageSuggestions extends SpeakeasyBase {
  @Metadata({ data: "json, name=suggestions", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion })
  suggestions?: GoogleCloudDialogflowV2beta1IntentMessageSuggestion[];
}
