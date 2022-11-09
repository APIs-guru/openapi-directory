import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem } from "./googleclouddialogflowv2beta1intentmessagebrowsecarouselcardbrowsecarouselcarditem";

export enum GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum {
    ImageDisplayOptionsUnspecified = "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED"
,    Gray = "GRAY"
,    White = "WHITE"
,    Cropped = "CROPPED"
,    BlurredBackground = "BLURRED_BACKGROUND"
}


// GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard
/** 
 * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
**/
export class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageDisplayOptions" })
  imageDisplayOptions?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;

  @Metadata({ data: "json, name=items", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem })
  items?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem[];
}
