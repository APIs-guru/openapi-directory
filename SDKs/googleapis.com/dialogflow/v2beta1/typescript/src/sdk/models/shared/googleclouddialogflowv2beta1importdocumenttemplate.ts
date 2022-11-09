import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum {
    KnowledgeTypeUnspecified = "KNOWLEDGE_TYPE_UNSPECIFIED"
,    Faq = "FAQ"
,    ExtractiveQa = "EXTRACTIVE_QA"
,    ArticleSuggestion = "ARTICLE_SUGGESTION"
,    AgentFacingSmartReply = "AGENT_FACING_SMART_REPLY"
,    SmartReply = "SMART_REPLY"
}


// GoogleCloudDialogflowV2beta1ImportDocumentTemplate
/** 
 * The template used for importing documents.
**/
export class GoogleCloudDialogflowV2beta1ImportDocumentTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=knowledgeTypes" })
  knowledgeTypes?: GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
