import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationInfo } from "./googleclouddialogflowv2conversationinfo";
import { GoogleCloudDialogflowV2InputConfig } from "./googleclouddialogflowv2inputconfig";
/**
 * Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
**/
export declare class GoogleCloudDialogflowV2ConversationDataset extends SpeakeasyBase {
    conversationCount?: string;
    conversationInfo?: GoogleCloudDialogflowV2ConversationInfo;
    createTime?: string;
    description?: string;
    displayName?: string;
    inputConfig?: GoogleCloudDialogflowV2InputConfig;
    name?: string;
}
/**
 * Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
**/
export declare class GoogleCloudDialogflowV2ConversationDatasetInput extends SpeakeasyBase {
    conversationInfo?: GoogleCloudDialogflowV2ConversationInfo;
    description?: string;
    displayName?: string;
    inputConfig?: GoogleCloudDialogflowV2InputConfig;
}
