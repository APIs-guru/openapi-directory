import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2IntentMessageBasicCardButton } from "./googleclouddialogflowv2intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";


// GoogleCloudDialogflowV2IntentMessageBasicCard
/** 
 * The basic card message. Useful for displaying information.
**/
export class GoogleCloudDialogflowV2IntentMessageBasicCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons", elemType: shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton })
  buttons?: GoogleCloudDialogflowV2IntentMessageBasicCardButton[];

  @Metadata({ data: "json, name=formattedText" })
  formattedText?: string;

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2IntentMessageImage;

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
