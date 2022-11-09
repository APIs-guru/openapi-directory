import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Membership } from "./membership";


// ValidateCreateMembershipRequest
/** 
 * Request message for the `GkeHub.ValidateCreateMembership` method.
**/
export class ValidateCreateMembershipRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=membership" })
  membership?: Membership;

  @Metadata({ data: "json, name=membershipId" })
  membershipId?: string;
}
