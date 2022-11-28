import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo } from "./googleclouddialogflowv2beta1intentmessageselectiteminfo";



// GoogleCloudDialogflowV2beta1IntentMessageListSelectItem
/** 
 * An item in the list.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageListSelectItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
