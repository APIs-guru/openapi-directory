import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2InputConfig } from "./googleclouddialogflowv2inputconfig";


// GoogleCloudDialogflowV2ImportConversationDataRequest
/** 
 * The request message for ConversationDatasets.ImportConversationData.
**/
export class GoogleCloudDialogflowV2ImportConversationDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudDialogflowV2InputConfig;
}
