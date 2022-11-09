import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GuardianInvitationStateEnum {
    GuardianInvitationStateUnspecified = "GUARDIAN_INVITATION_STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Complete = "COMPLETE"
}


// GuardianInvitation
/** 
 * An invitation to become the guardian of a specified user, sent to a specified email address.
**/
export class GuardianInvitation extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=invitationId" })
  invitationId?: string;

  @Metadata({ data: "json, name=invitedEmailAddress" })
  invitedEmailAddress?: string;

  @Metadata({ data: "json, name=state" })
  state?: GuardianInvitationStateEnum;

  @Metadata({ data: "json, name=studentId" })
  studentId?: string;
}
