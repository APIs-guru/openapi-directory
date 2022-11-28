package shared

type SendAsVerificationStatusEnum string

const (
	SendAsVerificationStatusEnumVerificationStatusUnspecified SendAsVerificationStatusEnum = "verificationStatusUnspecified"
	SendAsVerificationStatusEnumAccepted                      SendAsVerificationStatusEnum = "accepted"
	SendAsVerificationStatusEnumPending                       SendAsVerificationStatusEnum = "pending"
)

// SendAs
// Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.
type SendAs struct {
	DisplayName        *string                       `json:"displayName,omitempty"`
	IsDefault          *bool                         `json:"isDefault,omitempty"`
	IsPrimary          *bool                         `json:"isPrimary,omitempty"`
	ReplyToAddress     *string                       `json:"replyToAddress,omitempty"`
	SendAsEmail        *string                       `json:"sendAsEmail,omitempty"`
	Signature          *string                       `json:"signature,omitempty"`
	SMTPMsa            *SMTPMsa                      `json:"smtpMsa,omitempty"`
	TreatAsAlias       *bool                         `json:"treatAsAlias,omitempty"`
	VerificationStatus *SendAsVerificationStatusEnum `json:"verificationStatus,omitempty"`
}
