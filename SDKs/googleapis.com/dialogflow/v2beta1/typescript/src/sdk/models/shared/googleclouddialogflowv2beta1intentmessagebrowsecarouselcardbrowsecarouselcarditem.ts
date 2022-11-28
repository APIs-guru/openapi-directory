import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction } from "./googleclouddialogflowv2beta1intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction";



// GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem
/** 
 * Browsing carousel tile
**/
export class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=footer" })
  footer?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=openUriAction" })
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
