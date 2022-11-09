import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionfeatureconfig";


// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig
/** 
 * Detail human agent assistant config.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=featureConfigs", elemType: shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig })
  featureConfigs?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig[];

  @Metadata({ data: "json, name=groupSuggestionResponses" })
  groupSuggestionResponses?: boolean;
}
