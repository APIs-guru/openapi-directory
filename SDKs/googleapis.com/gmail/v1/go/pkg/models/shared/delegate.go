package shared

type DelegateVerificationStatusEnum string

const (
	DelegateVerificationStatusEnumVerificationStatusUnspecified DelegateVerificationStatusEnum = "verificationStatusUnspecified"
	DelegateVerificationStatusEnumAccepted                      DelegateVerificationStatusEnum = "accepted"
	DelegateVerificationStatusEnumPending                       DelegateVerificationStatusEnum = "pending"
	DelegateVerificationStatusEnumRejected                      DelegateVerificationStatusEnum = "rejected"
	DelegateVerificationStatusEnumExpired                       DelegateVerificationStatusEnum = "expired"
)

type Delegate struct {
	DelegateEmail      *string                         `json:"delegateEmail,omitempty"`
	VerificationStatus *DelegateVerificationStatusEnum `json:"verificationStatus,omitempty"`
}
