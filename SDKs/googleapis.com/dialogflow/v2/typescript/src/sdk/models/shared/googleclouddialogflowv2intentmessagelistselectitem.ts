import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageSelectItemInfo } from "./googleclouddialogflowv2intentmessageselectiteminfo";


// GoogleCloudDialogflowV2IntentMessageListSelectItem
/** 
 * An item in the list.
**/
export class GoogleCloudDialogflowV2IntentMessageListSelectItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2IntentMessageImage;

  @Metadata({ data: "json, name=info" })
  info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
