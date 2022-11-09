import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigcontextfiltersettings";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigdialogflowquerysource";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigdocumentquerysource";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigknowledgebasequerysource";


// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig
/** 
 * Config for suggestion query.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @Metadata({ data: "json, name=contextFilterSettings" })
  contextFilterSettings?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;

  @Metadata({ data: "json, name=dialogflowQuerySource" })
  dialogflowQuerySource?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;

  @Metadata({ data: "json, name=documentQuerySource" })
  documentQuerySource?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;

  @Metadata({ data: "json, name=knowledgeBaseQuerySource" })
  knowledgeBaseQuerySource?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;
}
