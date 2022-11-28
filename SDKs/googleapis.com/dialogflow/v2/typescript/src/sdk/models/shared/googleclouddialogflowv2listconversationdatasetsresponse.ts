import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationDataset } from "./googleclouddialogflowv2conversationdataset";



// GoogleCloudDialogflowV2ListConversationDatasetsResponse
/** 
 * The response message for ConversationDatasets.ListConversationDatasets.
**/
export class GoogleCloudDialogflowV2ListConversationDatasetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationDatasets", elemType: GoogleCloudDialogflowV2ConversationDataset })
  conversationDatasets?: GoogleCloudDialogflowV2ConversationDataset[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
