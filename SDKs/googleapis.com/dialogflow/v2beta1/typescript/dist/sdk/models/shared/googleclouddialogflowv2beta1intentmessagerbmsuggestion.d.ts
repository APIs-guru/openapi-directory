import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestedaction";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestedreply";
/**
 * Rich Business Messaging (RBM) suggestion. Suggestions allow user to easily select/click a predefined response or perform an action (like opening a web uri).
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion extends SpeakeasyBase {
    action?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;
    reply?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
}
