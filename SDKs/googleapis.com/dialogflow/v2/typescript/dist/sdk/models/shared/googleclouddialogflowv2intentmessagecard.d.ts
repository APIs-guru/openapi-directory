import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageCardButton } from "./googleclouddialogflowv2intentmessagecardbutton";
/**
 * The card response message.
**/
export declare class GoogleCloudDialogflowV2IntentMessageCard extends SpeakeasyBase {
    buttons?: GoogleCloudDialogflowV2IntentMessageCardButton[];
    imageUri?: string;
    subtitle?: string;
    title?: string;
}
