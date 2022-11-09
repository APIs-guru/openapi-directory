import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AuthorizationAttemptInfoFailureReasonEnum {
    FailureReasonUnspecified = "FAILURE_REASON_UNSPECIFIED",
    Config = "CONFIG",
    Caa = "CAA",
    RateLimited = "RATE_LIMITED"
}
export declare enum AuthorizationAttemptInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Authorizing = "AUTHORIZING",
    Authorized = "AUTHORIZED",
    Failed = "FAILED"
}
/**
 * State of the latest attempt to authorize a domain for certificate issuance.
**/
export declare class AuthorizationAttemptInfo extends SpeakeasyBase {
    details?: string;
    domain?: string;
    failureReason?: AuthorizationAttemptInfoFailureReasonEnum;
    state?: AuthorizationAttemptInfoStateEnum;
}
