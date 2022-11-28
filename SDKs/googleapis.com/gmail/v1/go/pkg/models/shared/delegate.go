package shared

type DelegateVerificationStatusEnum string

const (
	DelegateVerificationStatusEnumVerificationStatusUnspecified DelegateVerificationStatusEnum = "verificationStatusUnspecified"
	DelegateVerificationStatusEnumAccepted                      DelegateVerificationStatusEnum = "accepted"
	DelegateVerificationStatusEnumPending                       DelegateVerificationStatusEnum = "pending"
	DelegateVerificationStatusEnumRejected                      DelegateVerificationStatusEnum = "rejected"
	DelegateVerificationStatusEnumExpired                       DelegateVerificationStatusEnum = "expired"
)

// Delegate
// Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator's account. See "Set up mail delegation" for more information about delegates.
type Delegate struct {
	DelegateEmail      *string                         `json:"delegateEmail,omitempty"`
	VerificationStatus *DelegateVerificationStatusEnum `json:"verificationStatus,omitempty"`
}
