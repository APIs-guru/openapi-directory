package shared

type ServiceResolver struct {
	EndpointFilter          *string       `json:"endpointFilter,omitempty"`
	Hostname                *string       `json:"hostname,omitempty"`
	ServerCertificates      []Certificate `json:"serverCertificates,omitempty"`
	ServiceDirectoryService *string       `json:"serviceDirectoryService,omitempty"`
}
