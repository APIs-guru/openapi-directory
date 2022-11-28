import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton } from "./googleclouddialogflowv2beta1intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";



// GoogleCloudDialogflowV2beta1IntentMessageBasicCard
/** 
 * The basic card message. Useful for displaying information.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageBasicCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons", elemType: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton })
  buttons?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];

  @SpeakeasyMetadata({ data: "json, name=formattedText" })
  formattedText?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
