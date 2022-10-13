package shared

type IdentitytoolkitRelyingpartySendVerificationCodeRequest struct {
	IosReceipt     *string `json:"iosReceipt"`
	IosSecret      *string `json:"iosSecret"`
	PhoneNumber    *string `json:"phoneNumber"`
	RecaptchaToken *string `json:"recaptchaToken"`
}
