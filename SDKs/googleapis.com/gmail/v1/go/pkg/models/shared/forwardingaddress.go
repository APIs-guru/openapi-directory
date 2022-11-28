package shared

type ForwardingAddressVerificationStatusEnum string

const (
	ForwardingAddressVerificationStatusEnumVerificationStatusUnspecified ForwardingAddressVerificationStatusEnum = "verificationStatusUnspecified"
	ForwardingAddressVerificationStatusEnumAccepted                      ForwardingAddressVerificationStatusEnum = "accepted"
	ForwardingAddressVerificationStatusEnumPending                       ForwardingAddressVerificationStatusEnum = "pending"
)

// ForwardingAddress
// Settings for a forwarding address.
type ForwardingAddress struct {
	ForwardingEmail    *string                                  `json:"forwardingEmail,omitempty"`
	VerificationStatus *ForwardingAddressVerificationStatusEnum `json:"verificationStatus,omitempty"`
}
