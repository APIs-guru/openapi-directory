import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigconversationmodelconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigconversationprocessconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfig";
import { GoogleCloudDialogflowV2beta1SuggestionFeature } from "./googleclouddialogflowv2beta1suggestionfeature";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestiontriggersettings";
/**
 * Config for suggestion features.
**/
export declare class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig extends SpeakeasyBase {
    conversationModelConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig;
    conversationProcessConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig;
    enableEventBasedSuggestion?: boolean;
    queryConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig;
    suggestionFeature?: GoogleCloudDialogflowV2beta1SuggestionFeature;
    suggestionTriggerSettings?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings;
}
