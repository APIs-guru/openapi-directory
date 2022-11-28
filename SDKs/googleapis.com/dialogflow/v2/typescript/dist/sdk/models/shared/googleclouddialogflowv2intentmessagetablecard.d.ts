import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageBasicCardButton } from "./googleclouddialogflowv2intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2IntentMessageColumnProperties } from "./googleclouddialogflowv2intentmessagecolumnproperties";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageTableCardRow } from "./googleclouddialogflowv2intentmessagetablecardrow";
/**
 * Table card for Actions on Google.
**/
export declare class GoogleCloudDialogflowV2IntentMessageTableCard extends SpeakeasyBase {
    buttons?: GoogleCloudDialogflowV2IntentMessageBasicCardButton[];
    columnProperties?: GoogleCloudDialogflowV2IntentMessageColumnProperties[];
    image?: GoogleCloudDialogflowV2IntentMessageImage;
    rows?: GoogleCloudDialogflowV2IntentMessageTableCardRow[];
    subtitle?: string;
    title?: string;
}
