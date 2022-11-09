import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction } from "./googleclouddialogflowv2intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction";


// GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem
/** 
 * Browsing carousel tile
**/
export class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=footer" })
  footer?: string;

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2IntentMessageImage;

  @Metadata({ data: "json, name=openUriAction" })
  openUriAction?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
