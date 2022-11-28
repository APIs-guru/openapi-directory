import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo } from "./googleclouddialogflowv2beta1intentmessageselectiteminfo";
/**
 * An item in the list.
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageListSelectItem extends SpeakeasyBase {
    description?: string;
    image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
    info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
    title?: string;
}
