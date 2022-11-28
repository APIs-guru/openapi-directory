package shared

// DateShiftConfig
// Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination.
type DateShiftConfig struct {
	CryptoKey  *string              `json:"cryptoKey,omitempty"`
	KmsWrapped *KmsWrappedCryptoKey `json:"kmsWrapped,omitempty"`
}
