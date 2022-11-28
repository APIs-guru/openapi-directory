import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem } from "./googleclouddialogflowv2intentmessagebrowsecarouselcardbrowsecarouselcarditem";
export declare enum GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum {
    ImageDisplayOptionsUnspecified = "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED",
    Gray = "GRAY",
    White = "WHITE",
    Cropped = "CROPPED",
    BlurredBackground = "BLURRED_BACKGROUND"
}
/**
 * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
**/
export declare class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard extends SpeakeasyBase {
    imageDisplayOptions?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;
    items?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[];
}
