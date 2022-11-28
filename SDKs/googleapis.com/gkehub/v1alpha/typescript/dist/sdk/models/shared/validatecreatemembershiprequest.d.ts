import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipInput } from "./membership";
/**
 * Request message for the `GkeHub.ValidateCreateMembership` method.
**/
export declare class ValidateCreateMembershipRequestInput extends SpeakeasyBase {
    membership?: MembershipInput;
    membershipId?: string;
}
