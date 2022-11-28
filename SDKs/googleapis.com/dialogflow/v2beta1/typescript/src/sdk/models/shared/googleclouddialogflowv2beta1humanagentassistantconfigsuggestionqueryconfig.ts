import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigcontextfiltersettings";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigdialogflowquerysource";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigdocumentquerysource";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigknowledgebasequerysource";



// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig
/** 
 * Config for suggestion query.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=contextFilterSettings" })
  contextFilterSettings?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;

  @SpeakeasyMetadata({ data: "json, name=dialogflowQuerySource" })
  dialogflowQuerySource?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;

  @SpeakeasyMetadata({ data: "json, name=documentQuerySource" })
  documentQuerySource?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;

  @SpeakeasyMetadata({ data: "json, name=knowledgeBaseQuerySource" })
  knowledgeBaseQuerySource?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;
}
