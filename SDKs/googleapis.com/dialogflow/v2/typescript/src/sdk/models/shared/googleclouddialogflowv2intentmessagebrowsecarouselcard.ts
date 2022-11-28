import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem } from "./googleclouddialogflowv2intentmessagebrowsecarouselcardbrowsecarouselcarditem";


export enum GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum {
    ImageDisplayOptionsUnspecified = "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED",
    Gray = "GRAY",
    White = "WHITE",
    Cropped = "CROPPED",
    BlurredBackground = "BLURRED_BACKGROUND"
}


// GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard
/** 
 * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
**/
export class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageDisplayOptions" })
  imageDisplayOptions?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem })
  items?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[];
}
