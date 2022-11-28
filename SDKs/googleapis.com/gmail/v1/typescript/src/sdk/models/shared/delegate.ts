import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DelegateVerificationStatusEnum {
    VerificationStatusUnspecified = "verificationStatusUnspecified",
    Accepted = "accepted",
    Pending = "pending",
    Rejected = "rejected",
    Expired = "expired"
}


// Delegate
/** 
 * Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator's account. See "Set up mail delegation" for more information about delegates.
**/
export class Delegate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegateEmail" })
  delegateEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationStatus" })
  verificationStatus?: DelegateVerificationStatusEnum;
}
