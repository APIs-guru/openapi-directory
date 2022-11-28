package shared

// SelfManagedCertificate
// Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.
type SelfManagedCertificate struct {
	PemCertificate *string `json:"pemCertificate,omitempty"`
	PemPrivateKey  *string `json:"pemPrivateKey,omitempty"`
}
