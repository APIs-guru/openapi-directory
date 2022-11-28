import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia } from "./googleclouddialogflowv2beta1intentmessagerbmcardcontentrbmmedia";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestion";
/**
 * Rich Business Messaging (RBM) Card content
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent extends SpeakeasyBase {
    description?: string;
    media?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
    suggestions?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];
    title?: string;
}
