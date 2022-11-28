package shared

// GoogleCloudNetworksecurityV1CertificateProvider
// Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
type GoogleCloudNetworksecurityV1CertificateProvider struct {
	CertificateProviderInstance *CertificateProviderInstance              `json:"certificateProviderInstance,omitempty"`
	GrpcEndpoint                *GoogleCloudNetworksecurityV1GrpcEndpoint `json:"grpcEndpoint,omitempty"`
}
