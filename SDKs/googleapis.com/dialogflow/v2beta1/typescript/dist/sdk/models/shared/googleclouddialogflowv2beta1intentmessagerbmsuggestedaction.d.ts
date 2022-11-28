import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactiondial";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactionopenuri";
/**
 * Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card.
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction extends SpeakeasyBase {
    dial?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
    openUrl?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
    postbackData?: string;
    shareLocation?: Map<string, any>;
    text?: string;
}
