import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IsInvitableUserResponse
/** 
 * Response for IsInvitableUser RPC.
**/
export class IsInvitableUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=isInvitableUser" })
  isInvitableUser?: boolean;
}
