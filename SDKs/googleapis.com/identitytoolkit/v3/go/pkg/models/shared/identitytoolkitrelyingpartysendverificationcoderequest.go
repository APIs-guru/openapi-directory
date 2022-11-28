package shared

// IdentitytoolkitRelyingpartySendVerificationCodeRequest
// Request for Identitytoolkit-SendVerificationCode
type IdentitytoolkitRelyingpartySendVerificationCodeRequest struct {
	IosReceipt     *string `json:"iosReceipt,omitempty"`
	IosSecret      *string `json:"iosSecret,omitempty"`
	PhoneNumber    *string `json:"phoneNumber,omitempty"`
	RecaptchaToken *string `json:"recaptchaToken,omitempty"`
}
