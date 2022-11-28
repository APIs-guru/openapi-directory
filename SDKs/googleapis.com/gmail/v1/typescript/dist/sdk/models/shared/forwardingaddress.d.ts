import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ForwardingAddressVerificationStatusEnum {
    VerificationStatusUnspecified = "verificationStatusUnspecified",
    Accepted = "accepted",
    Pending = "pending"
}
/**
 * Settings for a forwarding address.
**/
export declare class ForwardingAddress extends SpeakeasyBase {
    forwardingEmail?: string;
    verificationStatus?: ForwardingAddressVerificationStatusEnum;
}
