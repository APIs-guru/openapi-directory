package shared

// MeshCertificates
// Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
type MeshCertificates struct {
	EnableCertificates *bool `json:"enableCertificates,omitempty"`
}
