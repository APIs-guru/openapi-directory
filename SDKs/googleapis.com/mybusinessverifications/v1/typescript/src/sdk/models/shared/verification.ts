import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VerificationMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED"
,    Address = "ADDRESS"
,    Email = "EMAIL"
,    PhoneCall = "PHONE_CALL"
,    Sms = "SMS"
,    Auto = "AUTO"
,    VettedPartner = "VETTED_PARTNER"
}

export enum VerificationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Completed = "COMPLETED"
,    Failed = "FAILED"
}


// Verification
/** 
 * A verification represents a verification attempt on a location.
**/
export class Verification extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=method" })
  method?: VerificationMethodEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: VerificationStateEnum;
}
