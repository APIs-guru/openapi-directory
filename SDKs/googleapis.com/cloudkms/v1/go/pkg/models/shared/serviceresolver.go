package shared

type ServiceResolver struct {
	EndpointFilter          *string       `json:"endpointFilter"`
	Hostname                *string       `json:"hostname"`
	ServerCertificates      []Certificate `json:"serverCertificates"`
	ServiceDirectoryService *string       `json:"serviceDirectoryService"`
}
