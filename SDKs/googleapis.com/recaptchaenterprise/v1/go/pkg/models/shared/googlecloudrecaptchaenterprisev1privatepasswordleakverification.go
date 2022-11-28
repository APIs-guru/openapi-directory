package shared

// GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput
// Private password leak verification info.
type GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput struct {
	EncryptedUserCredentialsHash *string `json:"encryptedUserCredentialsHash,omitempty"`
	LookupHashPrefix             *string `json:"lookupHashPrefix,omitempty"`
}

// GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification
// Private password leak verification info.
type GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification struct {
	EncryptedLeakMatchPrefixes     []string `json:"encryptedLeakMatchPrefixes,omitempty"`
	EncryptedUserCredentialsHash   *string  `json:"encryptedUserCredentialsHash,omitempty"`
	LookupHashPrefix               *string  `json:"lookupHashPrefix,omitempty"`
	ReencryptedUserCredentialsHash *string  `json:"reencryptedUserCredentialsHash,omitempty"`
}
