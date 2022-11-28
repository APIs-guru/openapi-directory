import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageBasicCardButton } from "./googleclouddialogflowv2intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";



// GoogleCloudDialogflowV2IntentMessageBasicCard
/** 
 * The basic card message. Useful for displaying information.
**/
export class GoogleCloudDialogflowV2IntentMessageBasicCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons", elemType: GoogleCloudDialogflowV2IntentMessageBasicCardButton })
  buttons?: GoogleCloudDialogflowV2IntentMessageBasicCardButton[];

  @SpeakeasyMetadata({ data: "json, name=formattedText" })
  formattedText?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
