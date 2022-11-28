import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionfeatureconfig";
export declare enum GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}
/**
 * The request message for ConversationProfiles.SetSuggestionFeature.
**/
export declare class GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest extends SpeakeasyBase {
    participantRole?: GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum;
    suggestionFeatureConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig;
}
