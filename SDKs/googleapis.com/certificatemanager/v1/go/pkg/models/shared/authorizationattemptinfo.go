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

type AuthorizationAttemptInfo struct {
	Details       *string                                    `json:"details"`
	Domain        *string                                    `json:"domain"`
	FailureReason *AuthorizationAttemptInfoFailureReasonEnum `json:"failureReason"`
	State         *AuthorizationAttemptInfoStateEnum         `json:"state"`
}
