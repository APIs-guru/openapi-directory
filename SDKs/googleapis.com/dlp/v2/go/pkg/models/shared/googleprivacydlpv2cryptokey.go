package shared

type GooglePrivacyDlpV2CryptoKey struct {
	KmsWrapped *GooglePrivacyDlpV2KmsWrappedCryptoKey `json:"kmsWrapped"`
	Transient  *GooglePrivacyDlpV2TransientCryptoKey  `json:"transient"`
	Unwrapped  *GooglePrivacyDlpV2UnwrappedCryptoKey  `json:"unwrapped"`
}
