import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Intent } from "./googleclouddialogflowv2beta1intent";


// GoogleCloudDialogflowV2beta1IntentBatch
/** 
 * This message is a wrapper around a collection of intents.
**/
export class GoogleCloudDialogflowV2beta1IntentBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=intents", elemType: shared.GoogleCloudDialogflowV2beta1Intent })
  intents?: GoogleCloudDialogflowV2beta1Intent[];
}
