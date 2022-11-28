package shared

// ServiceResolver
// A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
type ServiceResolver struct {
	EndpointFilter          *string       `json:"endpointFilter,omitempty"`
	Hostname                *string       `json:"hostname,omitempty"`
	ServerCertificates      []Certificate `json:"serverCertificates,omitempty"`
	ServiceDirectoryService *string       `json:"serviceDirectoryService,omitempty"`
}

// ServiceResolverInput
// A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
type ServiceResolverInput struct {
	EndpointFilter          *string            `json:"endpointFilter,omitempty"`
	Hostname                *string            `json:"hostname,omitempty"`
	ServerCertificates      []CertificateInput `json:"serverCertificates,omitempty"`
	ServiceDirectoryService *string            `json:"serviceDirectoryService,omitempty"`
}
