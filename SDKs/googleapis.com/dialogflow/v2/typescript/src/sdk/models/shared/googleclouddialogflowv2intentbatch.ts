import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2Intent } from "./googleclouddialogflowv2intent";


// GoogleCloudDialogflowV2IntentBatch
/** 
 * This message is a wrapper around a collection of intents.
**/
export class GoogleCloudDialogflowV2IntentBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=intents", elemType: shared.GoogleCloudDialogflowV2Intent })
  intents?: GoogleCloudDialogflowV2Intent[];
}
