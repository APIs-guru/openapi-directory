import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig } from "./googleclouddialogflowv2humanagentassistantconfigconversationmodelconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig } from "./googleclouddialogflowv2humanagentassistantconfigconversationprocessconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfig";
import { GoogleCloudDialogflowV2SuggestionFeature } from "./googleclouddialogflowv2suggestionfeature";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings } from "./googleclouddialogflowv2humanagentassistantconfigsuggestiontriggersettings";
/**
 * Config for suggestion features.
**/
export declare class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig extends SpeakeasyBase {
    conversationModelConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig;
    conversationProcessConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig;
    enableEventBasedSuggestion?: boolean;
    queryConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig;
    suggestionFeature?: GoogleCloudDialogflowV2SuggestionFeature;
    suggestionTriggerSettings?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings;
}
