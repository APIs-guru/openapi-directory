import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageCardButton } from "./googleclouddialogflowv2beta1intentmessagecardbutton";
/**
 * The card response message.
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageCard extends SpeakeasyBase {
    buttons?: GoogleCloudDialogflowV2beta1IntentMessageCardButton[];
    imageUri?: string;
    subtitle?: string;
    title?: string;
}
