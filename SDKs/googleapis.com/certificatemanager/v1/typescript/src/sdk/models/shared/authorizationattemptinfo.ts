import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AuthorizationAttemptInfoFailureReasonEnum {
    FailureReasonUnspecified = "FAILURE_REASON_UNSPECIFIED"
,    Config = "CONFIG"
,    Caa = "CAA"
,    RateLimited = "RATE_LIMITED"
}

export enum AuthorizationAttemptInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Authorizing = "AUTHORIZING"
,    Authorized = "AUTHORIZED"
,    Failed = "FAILED"
}


// AuthorizationAttemptInfo
/** 
 * State of the latest attempt to authorize a domain for certificate issuance.
**/
export class AuthorizationAttemptInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: AuthorizationAttemptInfoFailureReasonEnum;

  @Metadata({ data: "json, name=state" })
  state?: AuthorizationAttemptInfoStateEnum;
}
