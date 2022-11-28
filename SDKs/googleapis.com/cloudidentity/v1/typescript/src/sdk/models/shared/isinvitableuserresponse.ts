import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IsInvitableUserResponse
/** 
 * Response for IsInvitableUser RPC.
**/
export class IsInvitableUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isInvitableUser" })
  isInvitableUser?: boolean;
}
