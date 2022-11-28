import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton } from "./googleclouddialogflowv2beta1intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2beta1IntentMessageColumnProperties } from "./googleclouddialogflowv2beta1intentmessagecolumnproperties";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageTableCardRow } from "./googleclouddialogflowv2beta1intentmessagetablecardrow";
/**
 * Table card for Actions on Google.
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageTableCard extends SpeakeasyBase {
    buttons?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];
    columnProperties?: GoogleCloudDialogflowV2beta1IntentMessageColumnProperties[];
    image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
    rows?: GoogleCloudDialogflowV2beta1IntentMessageTableCardRow[];
    subtitle?: string;
    title?: string;
}
