import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo } from "./googleclouddialogflowv2beta1intentmessageselectiteminfo";


// GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem
/** 
 * An item in the carousel.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @Metadata({ data: "json, name=info" })
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
