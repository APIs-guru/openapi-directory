import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton } from "./googleclouddialogflowv2beta1intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
/**
 * The basic card message. Useful for displaying information.
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageBasicCard extends SpeakeasyBase {
    buttons?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];
    formattedText?: string;
    image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
    subtitle?: string;
    title?: string;
}
