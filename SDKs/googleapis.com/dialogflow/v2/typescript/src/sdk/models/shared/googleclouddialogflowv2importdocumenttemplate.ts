import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum {
    KnowledgeTypeUnspecified = "KNOWLEDGE_TYPE_UNSPECIFIED",
    Faq = "FAQ",
    ExtractiveQa = "EXTRACTIVE_QA",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    AgentFacingSmartReply = "AGENT_FACING_SMART_REPLY"
}


// GoogleCloudDialogflowV2ImportDocumentTemplate
/** 
 * The template used for importing documents.
**/
export class GoogleCloudDialogflowV2ImportDocumentTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=knowledgeTypes" })
  knowledgeTypes?: GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
