import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationDataset } from "./googleclouddialogflowv2conversationdataset";
/**
 * The response message for ConversationDatasets.ListConversationDatasets.
**/
export declare class GoogleCloudDialogflowV2ListConversationDatasetsResponse extends SpeakeasyBase {
    conversationDatasets?: GoogleCloudDialogflowV2ConversationDataset[];
    nextPageToken?: string;
}
