import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum {
    KnowledgeTypeUnspecified = "KNOWLEDGE_TYPE_UNSPECIFIED",
    Faq = "FAQ",
    ExtractiveQa = "EXTRACTIVE_QA",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    AgentFacingSmartReply = "AGENT_FACING_SMART_REPLY",
    SmartReply = "SMART_REPLY"
}


// GoogleCloudDialogflowV2beta1ImportDocumentTemplate
/** 
 * The template used for importing documents.
**/
export class GoogleCloudDialogflowV2beta1ImportDocumentTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=knowledgeTypes" })
  knowledgeTypes?: GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
