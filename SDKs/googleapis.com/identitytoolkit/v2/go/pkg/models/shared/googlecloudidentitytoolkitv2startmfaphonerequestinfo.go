package shared



type GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo struct {
    AutoRetrievalInfo *GoogleCloudIdentitytoolkitV2AutoRetrievalInfo `json:"autoRetrievalInfo,omitempty"`
    IosReceipt *string `json:"iosReceipt,omitempty"`
    IosSecret *string `json:"iosSecret,omitempty"`
    PhoneNumber *string `json:"phoneNumber,omitempty"`
    RecaptchaToken *string `json:"recaptchaToken,omitempty"`
    SafetyNetToken *string `json:"safetyNetToken,omitempty"`
    
}

