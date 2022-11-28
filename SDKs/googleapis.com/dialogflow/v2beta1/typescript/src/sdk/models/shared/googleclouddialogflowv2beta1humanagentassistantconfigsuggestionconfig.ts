import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionfeatureconfig";



// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig
/** 
 * Detail human agent assistant config.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=featureConfigs", elemType: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig })
  featureConfigs?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig[];

  @SpeakeasyMetadata({ data: "json, name=groupSuggestionResponses" })
  groupSuggestionResponses?: boolean;
}
