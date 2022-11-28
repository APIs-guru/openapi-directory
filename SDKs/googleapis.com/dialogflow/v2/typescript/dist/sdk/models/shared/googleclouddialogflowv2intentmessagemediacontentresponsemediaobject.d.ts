import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
/**
 * Response media object for media content card.
**/
export declare class GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject extends SpeakeasyBase {
    contentUrl?: string;
    description?: string;
    icon?: GoogleCloudDialogflowV2IntentMessageImage;
    largeImage?: GoogleCloudDialogflowV2IntentMessageImage;
    name?: string;
}
