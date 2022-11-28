import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ArticleSuggestionModelMetadata } from "./googleclouddialogflowv2articlesuggestionmodelmetadata";
import { GoogleCloudDialogflowV2InputDataset } from "./googleclouddialogflowv2inputdataset";
import { GoogleCloudDialogflowV2SmartReplyModelMetadata } from "./googleclouddialogflowv2smartreplymodelmetadata";
export declare enum GoogleCloudDialogflowV2ConversationModelStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Undeployed = "UNDEPLOYED",
    Deploying = "DEPLOYING",
    Deployed = "DEPLOYED",
    Undeploying = "UNDEPLOYING",
    Deleting = "DELETING",
    Failed = "FAILED",
    Pending = "PENDING"
}
/**
 * Represents a conversation model.
**/
export declare class GoogleCloudDialogflowV2ConversationModelInput extends SpeakeasyBase {
    articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;
    datasets?: GoogleCloudDialogflowV2InputDataset[];
    displayName?: string;
    languageCode?: string;
    name?: string;
    smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;
}
/**
 * Represents a conversation model.
**/
export declare class GoogleCloudDialogflowV2ConversationModel extends SpeakeasyBase {
    articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;
    createTime?: string;
    datasets?: GoogleCloudDialogflowV2InputDataset[];
    displayName?: string;
    languageCode?: string;
    name?: string;
    smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;
    state?: GoogleCloudDialogflowV2ConversationModelStateEnum;
}
