import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageSelectItemInfo } from "./googleclouddialogflowv2intentmessageselectiteminfo";
/**
 * An item in the carousel.
**/
export declare class GoogleCloudDialogflowV2IntentMessageCarouselSelectItem extends SpeakeasyBase {
    description?: string;
    image?: GoogleCloudDialogflowV2IntentMessageImage;
    info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
    title?: string;
}
