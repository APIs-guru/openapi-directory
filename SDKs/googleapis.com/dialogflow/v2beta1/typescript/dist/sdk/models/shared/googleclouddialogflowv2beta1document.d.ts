import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1DocumentReloadStatus } from "./googleclouddialogflowv2beta1documentreloadstatus";
export declare enum GoogleCloudDialogflowV2beta1DocumentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Reloading = "RELOADING",
    Deleting = "DELETING"
}
export declare enum GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum {
    KnowledgeTypeUnspecified = "KNOWLEDGE_TYPE_UNSPECIFIED",
    Faq = "FAQ",
    ExtractiveQa = "EXTRACTIVE_QA",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    AgentFacingSmartReply = "AGENT_FACING_SMART_REPLY",
    SmartReply = "SMART_REPLY"
}
/**
 * A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
**/
export declare class GoogleCloudDialogflowV2beta1Document extends SpeakeasyBase {
    content?: string;
    contentUri?: string;
    displayName?: string;
    enableAutoReload?: boolean;
    knowledgeTypes?: GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum[];
    latestReloadStatus?: GoogleCloudDialogflowV2beta1DocumentReloadStatus;
    metadata?: Map<string, string>;
    mimeType?: string;
    name?: string;
    rawContent?: string;
    state?: GoogleCloudDialogflowV2beta1DocumentStateEnum;
}
/**
 * A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
**/
export declare class GoogleCloudDialogflowV2beta1DocumentInput extends SpeakeasyBase {
    content?: string;
    contentUri?: string;
    displayName?: string;
    enableAutoReload?: boolean;
    knowledgeTypes?: GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum[];
    latestReloadStatus?: GoogleCloudDialogflowV2beta1DocumentReloadStatus;
    metadata?: Map<string, string>;
    mimeType?: string;
    name?: string;
    rawContent?: string;
}
