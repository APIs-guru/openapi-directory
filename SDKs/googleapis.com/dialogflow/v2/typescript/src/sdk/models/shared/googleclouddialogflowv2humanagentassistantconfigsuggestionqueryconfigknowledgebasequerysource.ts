import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource
/** 
 * Knowledge base source settings. Supported features: ARTICLE_SUGGESTION, FAQ.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=knowledgeBases" })
  knowledgeBases?: string[];
}
