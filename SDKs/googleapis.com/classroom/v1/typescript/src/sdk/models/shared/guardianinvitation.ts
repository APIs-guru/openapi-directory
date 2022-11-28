import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GuardianInvitationStateEnum {
    GuardianInvitationStateUnspecified = "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Complete = "COMPLETE"
}


// GuardianInvitation
/** 
 * An invitation to become the guardian of a specified user, sent to a specified email address.
**/
export class GuardianInvitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=invitationId" })
  invitationId?: string;

  @SpeakeasyMetadata({ data: "json, name=invitedEmailAddress" })
  invitedEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GuardianInvitationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=studentId" })
  studentId?: string;
}
