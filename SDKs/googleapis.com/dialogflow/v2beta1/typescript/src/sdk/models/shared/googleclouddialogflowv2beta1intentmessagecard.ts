import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageCardButton } from "./googleclouddialogflowv2beta1intentmessagecardbutton";



// GoogleCloudDialogflowV2beta1IntentMessageCard
/** 
 * The card response message.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons", elemType: GoogleCloudDialogflowV2beta1IntentMessageCardButton })
  buttons?: GoogleCloudDialogflowV2beta1IntentMessageCardButton[];

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
