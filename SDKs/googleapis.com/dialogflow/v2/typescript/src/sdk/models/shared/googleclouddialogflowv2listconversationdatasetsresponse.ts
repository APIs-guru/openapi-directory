import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2ConversationDataset } from "./googleclouddialogflowv2conversationdataset";


// GoogleCloudDialogflowV2ListConversationDatasetsResponse
/** 
 * The response message for ConversationDatasets.ListConversationDatasets.
**/
export class GoogleCloudDialogflowV2ListConversationDatasetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationDatasets", elemType: shared.GoogleCloudDialogflowV2ConversationDataset })
  conversationDatasets?: GoogleCloudDialogflowV2ConversationDataset[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
