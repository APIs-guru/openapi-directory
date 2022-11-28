import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DelegateVerificationStatusEnum {
    VerificationStatusUnspecified = "verificationStatusUnspecified",
    Accepted = "accepted",
    Pending = "pending",
    Rejected = "rejected",
    Expired = "expired"
}
/**
 * Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator's account. See "Set up mail delegation" for more information about delegates.
**/
export declare class Delegate extends SpeakeasyBase {
    delegateEmail?: string;
    verificationStatus?: DelegateVerificationStatusEnum;
}
