import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GuardianInvitation } from "./guardianinvitation";


// ListGuardianInvitationsResponse
/** 
 * Response when listing guardian invitations.
**/
export class ListGuardianInvitationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=guardianInvitations", elemType: shared.GuardianInvitation })
  guardianInvitations?: GuardianInvitation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
