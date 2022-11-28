package shared

type AuthorizationAttemptInfoFailureReasonEnum string

const (
	AuthorizationAttemptInfoFailureReasonEnumFailureReasonUnspecified AuthorizationAttemptInfoFailureReasonEnum = "FAILURE_REASON_UNSPECIFIED"
	AuthorizationAttemptInfoFailureReasonEnumConfig                   AuthorizationAttemptInfoFailureReasonEnum = "CONFIG"
	AuthorizationAttemptInfoFailureReasonEnumCaa                      AuthorizationAttemptInfoFailureReasonEnum = "CAA"
	AuthorizationAttemptInfoFailureReasonEnumRateLimited              AuthorizationAttemptInfoFailureReasonEnum = "RATE_LIMITED"
)

type AuthorizationAttemptInfoStateEnum string

const (
	AuthorizationAttemptInfoStateEnumStateUnspecified AuthorizationAttemptInfoStateEnum = "STATE_UNSPECIFIED"
	AuthorizationAttemptInfoStateEnumAuthorizing      AuthorizationAttemptInfoStateEnum = "AUTHORIZING"
	AuthorizationAttemptInfoStateEnumAuthorized       AuthorizationAttemptInfoStateEnum = "AUTHORIZED"
	AuthorizationAttemptInfoStateEnumFailed           AuthorizationAttemptInfoStateEnum = "FAILED"
)

// AuthorizationAttemptInfo
// State of the latest attempt to authorize a domain for certificate issuance.
type AuthorizationAttemptInfo struct {
	Details       *string                                    `json:"details,omitempty"`
	Domain        *string                                    `json:"domain,omitempty"`
	FailureReason *AuthorizationAttemptInfoFailureReasonEnum `json:"failureReason,omitempty"`
	State         *AuthorizationAttemptInfoStateEnum         `json:"state,omitempty"`
}
