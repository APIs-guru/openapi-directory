import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GuardianInvitation } from "./guardianinvitation";



// ListGuardianInvitationsResponse
/** 
 * Response when listing guardian invitations.
**/
export class ListGuardianInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guardianInvitations", elemType: GuardianInvitation })
  guardianInvitations?: GuardianInvitation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
