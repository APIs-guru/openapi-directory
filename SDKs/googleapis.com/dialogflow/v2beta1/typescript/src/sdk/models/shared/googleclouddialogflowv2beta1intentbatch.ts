import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentInput } from "./googleclouddialogflowv2beta1intent";



// GoogleCloudDialogflowV2beta1IntentBatchInput
/** 
 * This message is a wrapper around a collection of intents.
**/
export class GoogleCloudDialogflowV2beta1IntentBatchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intents", elemType: GoogleCloudDialogflowV2beta1IntentInput })
  intents?: GoogleCloudDialogflowV2beta1IntentInput[];
}
