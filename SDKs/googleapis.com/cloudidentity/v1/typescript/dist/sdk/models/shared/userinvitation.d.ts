import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum UserInvitationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    NotYetSent = "NOT_YET_SENT",
    Invited = "INVITED",
    Accepted = "ACCEPTED",
    Declined = "DECLINED"
}
/**
 * The `UserInvitation` resource represents an email that can be sent to an unmanaged user account inviting them to join the customer's Google Workspace or Cloud Identity account. An unmanaged account shares an email address domain with the Google Workspace or Cloud Identity account but is not managed by it yet. If the user accepts the `UserInvitation`, the user account will become managed.
**/
export declare class UserInvitation extends SpeakeasyBase {
    mailsSentCount?: string;
    name?: string;
    state?: UserInvitationStateEnum;
    updateTime?: string;
}
