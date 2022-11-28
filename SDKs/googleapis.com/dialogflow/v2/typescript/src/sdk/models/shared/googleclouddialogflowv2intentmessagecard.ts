import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageCardButton } from "./googleclouddialogflowv2intentmessagecardbutton";



// GoogleCloudDialogflowV2IntentMessageCard
/** 
 * The card response message.
**/
export class GoogleCloudDialogflowV2IntentMessageCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons", elemType: GoogleCloudDialogflowV2IntentMessageCardButton })
  buttons?: GoogleCloudDialogflowV2IntentMessageCardButton[];

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
