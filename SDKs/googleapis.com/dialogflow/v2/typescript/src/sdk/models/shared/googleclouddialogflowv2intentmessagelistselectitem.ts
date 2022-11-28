import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageSelectItemInfo } from "./googleclouddialogflowv2intentmessageselectiteminfo";



// GoogleCloudDialogflowV2IntentMessageListSelectItem
/** 
 * An item in the list.
**/
export class GoogleCloudDialogflowV2IntentMessageListSelectItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
