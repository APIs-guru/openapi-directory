import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentInput } from "./googleclouddialogflowv2intent";



// GoogleCloudDialogflowV2BatchDeleteIntentsRequestInput
/** 
 * The request message for Intents.BatchDeleteIntents.
**/
export class GoogleCloudDialogflowV2BatchDeleteIntentsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intents", elemType: GoogleCloudDialogflowV2IntentInput })
  intents?: GoogleCloudDialogflowV2IntentInput[];
}
