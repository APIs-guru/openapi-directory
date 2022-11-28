package shared

// GooglePrivacyDlpV2CryptoKey
// This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.
type GooglePrivacyDlpV2CryptoKey struct {
	KmsWrapped *GooglePrivacyDlpV2KmsWrappedCryptoKey `json:"kmsWrapped,omitempty"`
	Transient  *GooglePrivacyDlpV2TransientCryptoKey  `json:"transient,omitempty"`
	Unwrapped  *GooglePrivacyDlpV2UnwrappedCryptoKey  `json:"unwrapped,omitempty"`
}
