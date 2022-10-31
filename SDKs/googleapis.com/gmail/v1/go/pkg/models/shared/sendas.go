package shared

type SendAsVerificationStatusEnum string

const (
	SendAsVerificationStatusEnumVerificationStatusUnspecified SendAsVerificationStatusEnum = "verificationStatusUnspecified"
	SendAsVerificationStatusEnumAccepted                      SendAsVerificationStatusEnum = "accepted"
	SendAsVerificationStatusEnumPending                       SendAsVerificationStatusEnum = "pending"
)

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
