package shared

type MasterAuth struct {
	ClientCertificate       *string                  `json:"clientCertificate"`
	ClientCertificateConfig *ClientCertificateConfig `json:"clientCertificateConfig"`
	ClientKey               *string                  `json:"clientKey"`
	ClusterCaCertificate    *string                  `json:"clusterCaCertificate"`
	Password                *string                  `json:"password"`
	Username                *string                  `json:"username"`
}
