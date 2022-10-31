package shared

type ValidationCa struct {
	CertificateProviderInstance *CertificateProviderInstance              `json:"certificateProviderInstance,omitempty"`
	GrpcEndpoint                *GoogleCloudNetworksecurityV1GrpcEndpoint `json:"grpcEndpoint,omitempty"`
}
