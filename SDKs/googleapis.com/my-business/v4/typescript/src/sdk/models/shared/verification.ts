import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VerificationMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    Address = "ADDRESS",
    Email = "EMAIL",
    PhoneCall = "PHONE_CALL",
    Sms = "SMS",
    Auto = "AUTO"
}

export enum VerificationStateEnum {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Completed = "COMPLETED",
    Failed = "FAILED"
}


// Verification
/** 
 * A verification represents a verification attempt on a location.
**/
export class Verification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: VerificationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: VerificationStateEnum;
}
