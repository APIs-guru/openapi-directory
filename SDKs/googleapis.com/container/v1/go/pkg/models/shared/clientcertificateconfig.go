package shared

// ClientCertificateConfig
// Configuration for client certificates on the cluster.
type ClientCertificateConfig struct {
	IssueClientCertificate *bool `json:"issueClientCertificate,omitempty"`
}
