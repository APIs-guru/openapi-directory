import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2InputConfig } from "./googleclouddialogflowv2inputconfig";



// GoogleCloudDialogflowV2ImportConversationDataRequest
/** 
 * The request message for ConversationDatasets.ImportConversationData.
**/
export class GoogleCloudDialogflowV2ImportConversationDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudDialogflowV2InputConfig;
}
