import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum {
    KnowledgeTypeUnspecified = "KNOWLEDGE_TYPE_UNSPECIFIED",
    Faq = "FAQ",
    ExtractiveQa = "EXTRACTIVE_QA",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    AgentFacingSmartReply = "AGENT_FACING_SMART_REPLY"
}
/**
 * The template used for importing documents.
**/
export declare class GoogleCloudDialogflowV2ImportDocumentTemplate extends SpeakeasyBase {
    knowledgeTypes?: GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum[];
    metadata?: Map<string, string>;
    mimeType?: string;
}
