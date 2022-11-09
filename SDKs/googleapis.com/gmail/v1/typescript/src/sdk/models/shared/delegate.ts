import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DelegateVerificationStatusEnum {
    VerificationStatusUnspecified = "verificationStatusUnspecified"
,    Accepted = "accepted"
,    Pending = "pending"
,    Rejected = "rejected"
,    Expired = "expired"
}


// Delegate
/** 
 * Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator's account. See "Set up mail delegation" for more information about delegates.
**/
export class Delegate extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegateEmail" })
  delegateEmail?: string;

  @Metadata({ data: "json, name=verificationStatus" })
  verificationStatus?: DelegateVerificationStatusEnum;
}
