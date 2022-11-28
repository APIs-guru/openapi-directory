package shared

// ValidationCa
// Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.
type ValidationCa struct {
	CertificateProviderInstance *CertificateProviderInstance                   `json:"certificateProviderInstance,omitempty"`
	GrpcEndpoint                *GoogleCloudNetworksecurityV1beta1GrpcEndpoint `json:"grpcEndpoint,omitempty"`
}
