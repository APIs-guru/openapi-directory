import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource
/** 
 * Knowledge base source settings. Supported features: ARTICLE_SUGGESTION, FAQ.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource extends SpeakeasyBase {
  @Metadata({ data: "json, name=knowledgeBases" })
  knowledgeBases?: string[];
}
