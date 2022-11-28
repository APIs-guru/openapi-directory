package shared

// EncryptionKey
// Defined a customer managed encryption key that will be used to encrypt Backup artifacts.
type EncryptionKey struct {
	GcpKmsEncryptionKey *string `json:"gcpKmsEncryptionKey,omitempty"`
}
