import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER",
    AnyAgent = "ANY_AGENT"
}
/**
 * The call participant speaking for a given utterance.
**/
export declare class GoogleCloudContactcenterinsightsV1ConversationParticipant extends SpeakeasyBase {
    dialogflowParticipant?: string;
    dialogflowParticipantName?: string;
    obfuscatedExternalUserId?: string;
    role?: GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum;
    userId?: string;
}
