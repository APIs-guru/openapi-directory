import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction } from "./googleclouddialogflowv2beta1intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction";
/**
 * Browsing carousel tile
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem extends SpeakeasyBase {
    description?: string;
    footer?: string;
    image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
    openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
    title?: string;
}
