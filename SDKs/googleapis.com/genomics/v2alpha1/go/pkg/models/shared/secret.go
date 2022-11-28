package shared

// Secret
// Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.
type Secret struct {
	CipherText *string `json:"cipherText,omitempty"`
	KeyName    *string `json:"keyName,omitempty"`
}
