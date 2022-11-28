import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2ParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}
/**
 * Represents a conversation participant (human agent, virtual agent, end-user).
**/
export declare class GoogleCloudDialogflowV2Participant extends SpeakeasyBase {
    documentsMetadataFilters?: Map<string, string>;
    name?: string;
    obfuscatedExternalUserId?: string;
    role?: GoogleCloudDialogflowV2ParticipantRoleEnum;
    sipRecordingMediaLabel?: string;
}
