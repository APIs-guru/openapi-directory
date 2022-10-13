package shared

type DateShiftConfig struct {
	CryptoKey  *string              `json:"cryptoKey"`
	KmsWrapped *KmsWrappedCryptoKey `json:"kmsWrapped"`
}
