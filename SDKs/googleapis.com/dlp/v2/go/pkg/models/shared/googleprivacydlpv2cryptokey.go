package shared

type GooglePrivacyDlpV2CryptoKey struct {
	KmsWrapped *GooglePrivacyDlpV2KmsWrappedCryptoKey `json:"kmsWrapped,omitempty"`
	Transient  *GooglePrivacyDlpV2TransientCryptoKey  `json:"transient,omitempty"`
	Unwrapped  *GooglePrivacyDlpV2UnwrappedCryptoKey  `json:"unwrapped,omitempty"`
}
