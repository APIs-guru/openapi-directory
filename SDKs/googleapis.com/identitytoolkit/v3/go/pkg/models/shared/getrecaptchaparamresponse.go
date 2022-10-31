package shared

type GetRecaptchaParamResponse struct {
	Kind             *string `json:"kind,omitempty"`
	RecaptchaSiteKey *string `json:"recaptchaSiteKey,omitempty"`
	RecaptchaStoken  *string `json:"recaptchaStoken,omitempty"`
}
