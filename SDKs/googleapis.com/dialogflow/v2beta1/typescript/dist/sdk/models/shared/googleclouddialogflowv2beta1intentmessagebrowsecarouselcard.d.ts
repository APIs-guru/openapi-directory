import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem } from "./googleclouddialogflowv2beta1intentmessagebrowsecarouselcardbrowsecarouselcarditem";
export declare enum GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum {
    ImageDisplayOptionsUnspecified = "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED",
    Gray = "GRAY",
    White = "WHITE",
    Cropped = "CROPPED",
    BlurredBackground = "BLURRED_BACKGROUND"
}
/**
 * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard extends SpeakeasyBase {
    imageDisplayOptions?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;
    items?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem[];
}
