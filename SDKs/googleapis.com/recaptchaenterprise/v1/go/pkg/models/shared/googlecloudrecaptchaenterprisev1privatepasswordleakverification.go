package shared

type GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification struct {
	EncryptedLeakMatchPrefixes     []string `json:"encryptedLeakMatchPrefixes"`
	EncryptedUserCredentialsHash   *string  `json:"encryptedUserCredentialsHash"`
	LookupHashPrefix               *string  `json:"lookupHashPrefix"`
	ReencryptedUserCredentialsHash *string  `json:"reencryptedUserCredentialsHash"`
}
