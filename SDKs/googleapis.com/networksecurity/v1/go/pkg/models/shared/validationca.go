package shared

type ValidationCa struct {
	CertificateProviderInstance *CertificateProviderInstance              `json:"certificateProviderInstance"`
	GrpcEndpoint                *GoogleCloudNetworksecurityV1GrpcEndpoint `json:"grpcEndpoint"`
}
