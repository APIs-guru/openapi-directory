import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionfeatureconfig";



// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig
/** 
 * Detail human agent assistant config.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=featureConfigs", elemType: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig })
  featureConfigs?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig[];

  @SpeakeasyMetadata({ data: "json, name=groupSuggestionResponses" })
  groupSuggestionResponses?: boolean;
}
