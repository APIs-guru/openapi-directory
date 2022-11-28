import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AuthorizationAttemptInfoFailureReasonEnum {
    FailureReasonUnspecified = "FAILURE_REASON_UNSPECIFIED",
    Config = "CONFIG",
    Caa = "CAA",
    RateLimited = "RATE_LIMITED"
}

export enum AuthorizationAttemptInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Authorizing = "AUTHORIZING",
    Authorized = "AUTHORIZED",
    Failed = "FAILED"
}


// AuthorizationAttemptInfo
/** 
 * State of the latest attempt to authorize a domain for certificate issuance.
**/
export class AuthorizationAttemptInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: AuthorizationAttemptInfoFailureReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AuthorizationAttemptInfoStateEnum;
}
