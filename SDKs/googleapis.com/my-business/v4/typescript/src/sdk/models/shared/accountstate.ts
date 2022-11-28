import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountStateStatusEnum {
    AccountStatusUnspecified = "ACCOUNT_STATUS_UNSPECIFIED",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    VerificationRequested = "VERIFICATION_REQUESTED"
}


// AccountState
/** 
 * Indicates status of the account, such as whether the account has been verified by Google.
**/
export class AccountState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountStateStatusEnum;
}
