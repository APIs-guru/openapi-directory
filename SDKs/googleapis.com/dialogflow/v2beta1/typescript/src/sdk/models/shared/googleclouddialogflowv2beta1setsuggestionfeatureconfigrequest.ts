import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionfeatureconfig";

export enum GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequestParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED"
,    HumanAgent = "HUMAN_AGENT"
,    AutomatedAgent = "AUTOMATED_AGENT"
,    EndUser = "END_USER"
}


// GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest
/** 
 * The request message for ConversationProfiles.SetSuggestionFeature.
**/
export class GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=participantRole" })
  participantRole?: GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequestParticipantRoleEnum;

  @Metadata({ data: "json, name=suggestionFeatureConfig" })
  suggestionFeatureConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig;
}
