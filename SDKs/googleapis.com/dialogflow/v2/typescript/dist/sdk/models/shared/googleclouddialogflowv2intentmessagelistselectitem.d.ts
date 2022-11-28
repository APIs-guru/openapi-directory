import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageSelectItemInfo } from "./googleclouddialogflowv2intentmessageselectiteminfo";
/**
 * An item in the list.
**/
export declare class GoogleCloudDialogflowV2IntentMessageListSelectItem extends SpeakeasyBase {
    description?: string;
    image?: GoogleCloudDialogflowV2IntentMessageImage;
    info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
    title?: string;
}
