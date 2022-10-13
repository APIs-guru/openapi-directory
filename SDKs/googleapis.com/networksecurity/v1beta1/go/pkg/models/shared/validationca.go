package shared

type ValidationCa struct {
	CertificateProviderInstance *CertificateProviderInstance                   `json:"certificateProviderInstance"`
	GrpcEndpoint                *GoogleCloudNetworksecurityV1beta1GrpcEndpoint `json:"grpcEndpoint"`
}
