package shared

type SendAsVerificationStatusEnum string

const (
	SendAsVerificationStatusEnumVerificationStatusUnspecified SendAsVerificationStatusEnum = "verificationStatusUnspecified"
	SendAsVerificationStatusEnumAccepted                      SendAsVerificationStatusEnum = "accepted"
	SendAsVerificationStatusEnumPending                       SendAsVerificationStatusEnum = "pending"
)

type SendAs struct {
	DisplayName        *string                       `json:"displayName"`
	IsDefault          *bool                         `json:"isDefault"`
	IsPrimary          *bool                         `json:"isPrimary"`
	ReplyToAddress     *string                       `json:"replyToAddress"`
	SendAsEmail        *string                       `json:"sendAsEmail"`
	Signature          *string                       `json:"signature"`
	SMTPMsa            *SMTPMsa                      `json:"smtpMsa"`
	TreatAsAlias       *bool                         `json:"treatAsAlias"`
	VerificationStatus *SendAsVerificationStatusEnum `json:"verificationStatus"`
}
