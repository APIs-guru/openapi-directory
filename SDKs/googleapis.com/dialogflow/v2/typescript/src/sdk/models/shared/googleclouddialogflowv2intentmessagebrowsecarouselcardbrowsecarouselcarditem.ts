import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction } from "./googleclouddialogflowv2intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction";



// GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem
/** 
 * Browsing carousel tile
**/
export class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=footer" })
  footer?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=openUriAction" })
  openUriAction?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
