package shared

type KmsWrappedCryptoKey struct {
	CryptoKey  *string `json:"cryptoKey"`
	WrappedKey *string `json:"wrappedKey"`
}
