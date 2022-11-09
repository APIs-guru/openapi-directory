import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserInvitationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    NotYetSent = "NOT_YET_SENT"
,    Invited = "INVITED"
,    Accepted = "ACCEPTED"
,    Declined = "DECLINED"
}


// UserInvitation
/** 
 * The `UserInvitation` resource represents an email that can be sent to an unmanaged user account inviting them to join the customer's Google Workspace or Cloud Identity account. An unmanaged account shares an email address domain with the Google Workspace or Cloud Identity account but is not managed by it yet. If the user accepts the `UserInvitation`, the user account will become managed.
**/
export class UserInvitation extends SpeakeasyBase {
  @Metadata({ data: "json, name=mailsSentCount" })
  mailsSentCount?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: UserInvitationStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
