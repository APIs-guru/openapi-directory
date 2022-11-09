import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction } from "./googleclouddialogflowv2beta1intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction";


// GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem
/** 
 * Browsing carousel tile
**/
export class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=footer" })
  footer?: string;

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @Metadata({ data: "json, name=openUriAction" })
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
