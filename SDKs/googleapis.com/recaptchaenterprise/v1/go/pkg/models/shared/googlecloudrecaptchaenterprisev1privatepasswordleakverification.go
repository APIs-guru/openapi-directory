package shared

type GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification struct {
	EncryptedLeakMatchPrefixes     []string `json:"encryptedLeakMatchPrefixes,omitempty"`
	EncryptedUserCredentialsHash   *string  `json:"encryptedUserCredentialsHash,omitempty"`
	LookupHashPrefix               *string  `json:"lookupHashPrefix,omitempty"`
	ReencryptedUserCredentialsHash *string  `json:"reencryptedUserCredentialsHash,omitempty"`
}
