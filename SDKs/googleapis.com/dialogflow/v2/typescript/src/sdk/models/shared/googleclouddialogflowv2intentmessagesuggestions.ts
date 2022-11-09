import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2IntentMessageSuggestion } from "./googleclouddialogflowv2intentmessagesuggestion";


// GoogleCloudDialogflowV2IntentMessageSuggestions
/** 
 * The collection of suggestions.
**/
export class GoogleCloudDialogflowV2IntentMessageSuggestions extends SpeakeasyBase {
  @Metadata({ data: "json, name=suggestions", elemType: shared.GoogleCloudDialogflowV2IntentMessageSuggestion })
  suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestion[];
}
