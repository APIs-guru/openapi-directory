import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource
/** 
 * Knowledge base source settings. Supported features: ARTICLE_SUGGESTION, FAQ.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=knowledgeBases" })
  knowledgeBases?: string[];
}
