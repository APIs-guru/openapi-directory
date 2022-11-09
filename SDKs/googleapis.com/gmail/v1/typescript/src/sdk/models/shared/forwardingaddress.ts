import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ForwardingAddressVerificationStatusEnum {
    VerificationStatusUnspecified = "verificationStatusUnspecified"
,    Accepted = "accepted"
,    Pending = "pending"
}


// ForwardingAddress
/** 
 * Settings for a forwarding address.
**/
export class ForwardingAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=forwardingEmail" })
  forwardingEmail?: string;

  @Metadata({ data: "json, name=verificationStatus" })
  verificationStatus?: ForwardingAddressVerificationStatusEnum;
}
