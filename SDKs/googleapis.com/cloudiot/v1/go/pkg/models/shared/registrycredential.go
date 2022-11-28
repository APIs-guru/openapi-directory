package shared

// RegistryCredential
// A server-stored registry credential used to validate device credentials.
type RegistryCredential struct {
	PublicKeyCertificate *PublicKeyCertificate `json:"publicKeyCertificate,omitempty"`
}
