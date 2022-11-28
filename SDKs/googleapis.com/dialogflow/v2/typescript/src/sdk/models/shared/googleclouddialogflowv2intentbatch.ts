import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentInput } from "./googleclouddialogflowv2intent";



// GoogleCloudDialogflowV2IntentBatchInput
/** 
 * This message is a wrapper around a collection of intents.
**/
export class GoogleCloudDialogflowV2IntentBatchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intents", elemType: GoogleCloudDialogflowV2IntentInput })
  intents?: GoogleCloudDialogflowV2IntentInput[];
}
