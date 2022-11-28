import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VerificationMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    Address = "ADDRESS",
    Email = "EMAIL",
    PhoneCall = "PHONE_CALL",
    Sms = "SMS",
    Auto = "AUTO"
}
export declare enum VerificationStateEnum {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Completed = "COMPLETED",
    Failed = "FAILED"
}
/**
 * A verification represents a verification attempt on a location.
**/
export declare class Verification extends SpeakeasyBase {
    createTime?: string;
    method?: VerificationMethodEnum;
    name?: string;
    state?: VerificationStateEnum;
}
