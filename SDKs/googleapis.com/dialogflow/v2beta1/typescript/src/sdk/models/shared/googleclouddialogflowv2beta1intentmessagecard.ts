import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessageCardButton } from "./googleclouddialogflowv2beta1intentmessagecardbutton";


// GoogleCloudDialogflowV2beta1IntentMessageCard
/** 
 * The card response message.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton })
  buttons?: GoogleCloudDialogflowV2beta1IntentMessageCardButton[];

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
