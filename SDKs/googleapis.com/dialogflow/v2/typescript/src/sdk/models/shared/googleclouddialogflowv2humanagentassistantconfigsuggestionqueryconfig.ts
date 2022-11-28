import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigcontextfiltersettings";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigdialogflowquerysource";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigdocumentquerysource";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigknowledgebasequerysource";



// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig
/** 
 * Config for suggestion query.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=contextFilterSettings" })
  contextFilterSettings?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;

  @SpeakeasyMetadata({ data: "json, name=dialogflowQuerySource" })
  dialogflowQuerySource?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;

  @SpeakeasyMetadata({ data: "json, name=documentQuerySource" })
  documentQuerySource?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;

  @SpeakeasyMetadata({ data: "json, name=knowledgeBaseQuerySource" })
  knowledgeBaseQuerySource?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;
}
