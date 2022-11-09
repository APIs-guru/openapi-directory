import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton } from "./googleclouddialogflowv2beta1intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";


// GoogleCloudDialogflowV2beta1IntentMessageBasicCard
/** 
 * The basic card message. Useful for displaying information.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageBasicCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton })
  buttons?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];

  @Metadata({ data: "json, name=formattedText" })
  formattedText?: string;

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
