package shared

type GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo struct {
	AutoRetrievalInfo *GoogleCloudIdentitytoolkitV2AutoRetrievalInfo `json:"autoRetrievalInfo"`
	IosReceipt        *string                                        `json:"iosReceipt"`
	IosSecret         *string                                        `json:"iosSecret"`
	PhoneNumber       *string                                        `json:"phoneNumber"`
	RecaptchaToken    *string                                        `json:"recaptchaToken"`
	SafetyNetToken    *string                                        `json:"safetyNetToken"`
}
