import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountStateStatusEnum {
    AccountStatusUnspecified = "ACCOUNT_STATUS_UNSPECIFIED",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    VerificationRequested = "VERIFICATION_REQUESTED"
}
/**
 * Indicates status of the account, such as whether the account has been verified by Google.
**/
export declare class AccountState extends SpeakeasyBase {
    status?: AccountStateStatusEnum;
}
