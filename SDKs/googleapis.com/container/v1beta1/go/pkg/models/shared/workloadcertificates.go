package shared

// WorkloadCertificates
// Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
type WorkloadCertificates struct {
	EnableCertificates *bool `json:"enableCertificates,omitempty"`
}
