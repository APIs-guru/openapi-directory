import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig } from "./googleclouddialogflowv2humanagentassistantconfigconversationmodelconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig } from "./googleclouddialogflowv2humanagentassistantconfigconversationprocessconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfig";
import { GoogleCloudDialogflowV2SuggestionFeature } from "./googleclouddialogflowv2suggestionfeature";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings } from "./googleclouddialogflowv2humanagentassistantconfigsuggestiontriggersettings";



// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig
/** 
 * Config for suggestion features.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationModelConfig" })
  conversationModelConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig;

  @SpeakeasyMetadata({ data: "json, name=conversationProcessConfig" })
  conversationProcessConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig;

  @SpeakeasyMetadata({ data: "json, name=enableEventBasedSuggestion" })
  enableEventBasedSuggestion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=queryConfig" })
  queryConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig;

  @SpeakeasyMetadata({ data: "json, name=suggestionFeature" })
  suggestionFeature?: GoogleCloudDialogflowV2SuggestionFeature;

  @SpeakeasyMetadata({ data: "json, name=suggestionTriggerSettings" })
  suggestionTriggerSettings?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings;
}
