package shared

// CryptoHashConfig
// Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output. For example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`.
type CryptoHashConfig struct {
	CryptoKey  *string              `json:"cryptoKey,omitempty"`
	KmsWrapped *KmsWrappedCryptoKey `json:"kmsWrapped,omitempty"`
}
