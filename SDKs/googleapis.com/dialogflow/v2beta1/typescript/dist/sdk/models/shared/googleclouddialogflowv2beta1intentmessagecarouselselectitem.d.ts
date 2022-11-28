import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo } from "./googleclouddialogflowv2beta1intentmessageselectiteminfo";
/**
 * An item in the carousel.
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem extends SpeakeasyBase {
    description?: string;
    image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
    info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
    title?: string;
}
