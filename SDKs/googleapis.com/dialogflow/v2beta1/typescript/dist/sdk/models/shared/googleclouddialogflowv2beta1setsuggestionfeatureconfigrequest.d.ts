import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionfeatureconfig";
export declare enum GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequestParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}
/**
 * The request message for ConversationProfiles.SetSuggestionFeature.
**/
export declare class GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest extends SpeakeasyBase {
    participantRole?: GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequestParticipantRoleEnum;
    suggestionFeatureConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig;
}
