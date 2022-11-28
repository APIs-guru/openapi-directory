import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GuardianInvitationStateEnum {
    GuardianInvitationStateUnspecified = "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Complete = "COMPLETE"
}
/**
 * An invitation to become the guardian of a specified user, sent to a specified email address.
**/
export declare class GuardianInvitation extends SpeakeasyBase {
    creationTime?: string;
    invitationId?: string;
    invitedEmailAddress?: string;
    state?: GuardianInvitationStateEnum;
    studentId?: string;
}
