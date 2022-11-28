import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction } from "./googleclouddialogflowv2intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction";
/**
 * Browsing carousel tile
**/
export declare class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem extends SpeakeasyBase {
    description?: string;
    footer?: string;
    image?: GoogleCloudDialogflowV2IntentMessageImage;
    openUriAction?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
    title?: string;
}
