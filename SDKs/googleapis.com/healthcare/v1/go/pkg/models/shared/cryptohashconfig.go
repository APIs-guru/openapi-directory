package shared

type CryptoHashConfig struct {
	CryptoKey  *string              `json:"cryptoKey"`
	KmsWrapped *KmsWrappedCryptoKey `json:"kmsWrapped"`
}
