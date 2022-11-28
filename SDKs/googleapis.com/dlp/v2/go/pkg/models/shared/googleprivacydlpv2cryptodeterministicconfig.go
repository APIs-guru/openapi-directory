package shared

// GooglePrivacyDlpV2CryptoDeterministicConfig
// Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.
type GooglePrivacyDlpV2CryptoDeterministicConfig struct {
	Context           *GooglePrivacyDlpV2FieldID   `json:"context,omitempty"`
	CryptoKey         *GooglePrivacyDlpV2CryptoKey `json:"cryptoKey,omitempty"`
	SurrogateInfoType *GooglePrivacyDlpV2InfoType  `json:"surrogateInfoType,omitempty"`
}
