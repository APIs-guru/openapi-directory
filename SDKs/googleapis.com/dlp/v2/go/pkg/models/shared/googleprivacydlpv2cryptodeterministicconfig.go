package shared

type GooglePrivacyDlpV2CryptoDeterministicConfig struct {
	Context           *GooglePrivacyDlpV2FieldID   `json:"context"`
	CryptoKey         *GooglePrivacyDlpV2CryptoKey `json:"cryptoKey"`
	SurrogateInfoType *GooglePrivacyDlpV2InfoType  `json:"surrogateInfoType"`
}
