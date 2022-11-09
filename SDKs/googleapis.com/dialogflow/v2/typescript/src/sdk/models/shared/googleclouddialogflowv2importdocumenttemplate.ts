import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum {
    KnowledgeTypeUnspecified = "KNOWLEDGE_TYPE_UNSPECIFIED"
,    Faq = "FAQ"
,    ExtractiveQa = "EXTRACTIVE_QA"
,    ArticleSuggestion = "ARTICLE_SUGGESTION"
,    AgentFacingSmartReply = "AGENT_FACING_SMART_REPLY"
}


// GoogleCloudDialogflowV2ImportDocumentTemplate
/** 
 * The template used for importing documents.
**/
export class GoogleCloudDialogflowV2ImportDocumentTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=knowledgeTypes" })
  knowledgeTypes?: GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
