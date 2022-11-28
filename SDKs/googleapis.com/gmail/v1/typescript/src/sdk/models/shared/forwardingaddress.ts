import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ForwardingAddressVerificationStatusEnum {
    VerificationStatusUnspecified = "verificationStatusUnspecified",
    Accepted = "accepted",
    Pending = "pending"
}


// ForwardingAddress
/** 
 * Settings for a forwarding address.
**/
export class ForwardingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forwardingEmail" })
  forwardingEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationStatus" })
  verificationStatus?: ForwardingAddressVerificationStatusEnum;
}
