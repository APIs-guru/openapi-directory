import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageBasicCardButton } from "./googleclouddialogflowv2intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
/**
 * The basic card message. Useful for displaying information.
**/
export declare class GoogleCloudDialogflowV2IntentMessageBasicCard extends SpeakeasyBase {
    buttons?: GoogleCloudDialogflowV2IntentMessageBasicCardButton[];
    formattedText?: string;
    image?: GoogleCloudDialogflowV2IntentMessageImage;
    subtitle?: string;
    title?: string;
}
