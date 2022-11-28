import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentInput } from "./googleclouddialogflowv2beta1intent";



// GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequestInput
/** 
 * The request message for Intents.BatchDeleteIntents.
**/
export class GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intents", elemType: GoogleCloudDialogflowV2beta1IntentInput })
  intents?: GoogleCloudDialogflowV2beta1IntentInput[];
}
