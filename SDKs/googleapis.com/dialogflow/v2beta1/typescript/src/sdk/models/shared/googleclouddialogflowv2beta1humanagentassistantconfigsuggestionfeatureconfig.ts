import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=conversationModelConfig" })
  conversationModelConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig;

  @SpeakeasyMetadata({ data: "json, name=conversationProcessConfig" })
  conversationProcessConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig;

  @SpeakeasyMetadata({ data: "json, name=enableEventBasedSuggestion" })
  enableEventBasedSuggestion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=queryConfig" })
  queryConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig;

  @SpeakeasyMetadata({ data: "json, name=suggestionFeature" })
  suggestionFeature?: GoogleCloudDialogflowV2beta1SuggestionFeature;

  @SpeakeasyMetadata({ data: "json, name=suggestionTriggerSettings" })
  suggestionTriggerSettings?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings;
}
