package shared

type EncryptionKey struct {
	GcpKmsEncryptionKey *string `json:"gcpKmsEncryptionKey,omitempty"`
}
