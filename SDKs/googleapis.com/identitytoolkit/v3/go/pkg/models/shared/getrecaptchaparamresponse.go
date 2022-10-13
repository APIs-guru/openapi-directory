package shared

type GetRecaptchaParamResponse struct {
	Kind             *string `json:"kind"`
	RecaptchaSiteKey *string `json:"recaptchaSiteKey"`
	RecaptchaStoken  *string `json:"recaptchaStoken"`
}
