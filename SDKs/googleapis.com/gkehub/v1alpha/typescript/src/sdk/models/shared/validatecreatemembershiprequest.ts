import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MembershipInput } from "./membership";



// ValidateCreateMembershipRequestInput
/** 
 * Request message for the `GkeHub.ValidateCreateMembership` method.
**/
export class ValidateCreateMembershipRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=membership" })
  membership?: MembershipInput;

  @SpeakeasyMetadata({ data: "json, name=membershipId" })
  membershipId?: string;
}
