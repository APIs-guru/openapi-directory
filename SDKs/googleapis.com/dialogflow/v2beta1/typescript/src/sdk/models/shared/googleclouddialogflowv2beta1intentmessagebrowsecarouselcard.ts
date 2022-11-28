import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem } from "./googleclouddialogflowv2beta1intentmessagebrowsecarouselcardbrowsecarouselcarditem";


export enum GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum {
    ImageDisplayOptionsUnspecified = "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED",
    Gray = "GRAY",
    White = "WHITE",
    Cropped = "CROPPED",
    BlurredBackground = "BLURRED_BACKGROUND"
}


// GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard
/** 
 * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
**/
export class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageDisplayOptions" })
  imageDisplayOptions?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem })
  items?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem[];
}
