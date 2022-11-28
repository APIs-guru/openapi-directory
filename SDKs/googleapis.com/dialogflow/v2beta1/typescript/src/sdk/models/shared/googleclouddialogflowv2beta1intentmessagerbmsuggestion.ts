import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestedaction";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestedreply";



// GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion
/** 
 * Rich Business Messaging (RBM) suggestion. Suggestions allow user to easily select/click a predefined response or perform an action (like opening a web uri).
**/
export class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;

  @SpeakeasyMetadata({ data: "json, name=reply" })
  reply?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
}
