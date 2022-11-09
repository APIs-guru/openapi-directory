import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionfeatureconfig";

export enum GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED"
,    HumanAgent = "HUMAN_AGENT"
,    AutomatedAgent = "AUTOMATED_AGENT"
,    EndUser = "END_USER"
}


// GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest
/** 
 * The request message for ConversationProfiles.SetSuggestionFeature.
**/
export class GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=participantRole" })
  participantRole?: GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum;

  @Metadata({ data: "json, name=suggestionFeatureConfig" })
  suggestionFeatureConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig;
}
