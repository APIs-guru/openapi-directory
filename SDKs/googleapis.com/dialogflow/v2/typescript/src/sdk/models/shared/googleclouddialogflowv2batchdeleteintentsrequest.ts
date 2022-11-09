import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2Intent } from "./googleclouddialogflowv2intent";


// GoogleCloudDialogflowV2BatchDeleteIntentsRequest
/** 
 * The request message for Intents.BatchDeleteIntents.
**/
export class GoogleCloudDialogflowV2BatchDeleteIntentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=intents", elemType: shared.GoogleCloudDialogflowV2Intent })
  intents?: GoogleCloudDialogflowV2Intent[];
}
