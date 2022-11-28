import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum {
    KnowledgeTypeUnspecified = "KNOWLEDGE_TYPE_UNSPECIFIED",
    Faq = "FAQ",
    ExtractiveQa = "EXTRACTIVE_QA",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    AgentFacingSmartReply = "AGENT_FACING_SMART_REPLY",
    SmartReply = "SMART_REPLY"
}
/**
 * The template used for importing documents.
**/
export declare class GoogleCloudDialogflowV2beta1ImportDocumentTemplate extends SpeakeasyBase {
    knowledgeTypes?: GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum[];
    metadata?: Map<string, string>;
    mimeType?: string;
}
