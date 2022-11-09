import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccountStateStatusEnum {
    AccountStatusUnspecified = "ACCOUNT_STATUS_UNSPECIFIED"
,    Verified = "VERIFIED"
,    Unverified = "UNVERIFIED"
,    VerificationRequested = "VERIFICATION_REQUESTED"
}


// AccountState
/** 
 * Indicates status of the account, such as whether the account has been verified by Google.
**/
export class AccountState extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: AccountStateStatusEnum;
}
