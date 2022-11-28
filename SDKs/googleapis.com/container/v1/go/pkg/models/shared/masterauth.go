package shared

// MasterAuth
// The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.
type MasterAuth struct {
	ClientCertificate       *string                  `json:"clientCertificate,omitempty"`
	ClientCertificateConfig *ClientCertificateConfig `json:"clientCertificateConfig,omitempty"`
	ClientKey               *string                  `json:"clientKey,omitempty"`
	ClusterCaCertificate    *string                  `json:"clusterCaCertificate,omitempty"`
	Password                *string                  `json:"password,omitempty"`
	Username                *string                  `json:"username,omitempty"`
}
