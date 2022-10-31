package shared



type ValidationCa struct {
    CertificateProviderInstance *CertificateProviderInstance `json:"certificateProviderInstance,omitempty"`
    GrpcEndpoint *GoogleCloudNetworksecurityV1beta1GrpcEndpoint `json:"grpcEndpoint,omitempty"`
    
}

