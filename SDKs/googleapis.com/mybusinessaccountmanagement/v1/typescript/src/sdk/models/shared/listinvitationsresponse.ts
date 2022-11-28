import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invitation } from "./invitation";



// ListInvitationsResponse
/** 
 * Response message for AccessControl.ListInvitations.
**/
export class ListInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invitations", elemType: Invitation })
  invitations?: Invitation[];
}
