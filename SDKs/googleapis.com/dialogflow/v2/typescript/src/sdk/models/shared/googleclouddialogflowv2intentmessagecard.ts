import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2IntentMessageCardButton } from "./googleclouddialogflowv2intentmessagecardbutton";


// GoogleCloudDialogflowV2IntentMessageCard
/** 
 * The card response message.
**/
export class GoogleCloudDialogflowV2IntentMessageCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons", elemType: shared.GoogleCloudDialogflowV2IntentMessageCardButton })
  buttons?: GoogleCloudDialogflowV2IntentMessageCardButton[];

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
