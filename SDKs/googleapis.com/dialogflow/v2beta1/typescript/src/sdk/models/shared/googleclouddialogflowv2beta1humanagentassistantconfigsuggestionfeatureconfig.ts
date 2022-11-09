import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigconversationmodelconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigconversationprocessconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfig";
import { GoogleCloudDialogflowV2beta1SuggestionFeature } from "./googleclouddialogflowv2beta1suggestionfeature";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestiontriggersettings";


// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig
/** 
 * Config for suggestion features.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationModelConfig" })
  conversationModelConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig;

  @Metadata({ data: "json, name=conversationProcessConfig" })
  conversationProcessConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig;

  @Metadata({ data: "json, name=enableEventBasedSuggestion" })
  enableEventBasedSuggestion?: boolean;

  @Metadata({ data: "json, name=queryConfig" })
  queryConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig;

  @Metadata({ data: "json, name=suggestionFeature" })
  suggestionFeature?: GoogleCloudDialogflowV2beta1SuggestionFeature;

  @Metadata({ data: "json, name=suggestionTriggerSettings" })
  suggestionTriggerSettings?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings;
}
