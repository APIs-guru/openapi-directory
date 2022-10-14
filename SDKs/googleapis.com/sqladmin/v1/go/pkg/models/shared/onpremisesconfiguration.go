package shared

type OnPremisesConfiguration struct {
	CaCertificate     *string            `json:"caCertificate,omitempty"`
	ClientCertificate *string            `json:"clientCertificate,omitempty"`
	ClientKey         *string            `json:"clientKey,omitempty"`
	DumpFilePath      *string            `json:"dumpFilePath,omitempty"`
	HostPort          *string            `json:"hostPort,omitempty"`
	Kind              *string            `json:"kind,omitempty"`
	Password          *string            `json:"password,omitempty"`
	SourceInstance    *InstanceReference `json:"sourceInstance,omitempty"`
	Username          *string            `json:"username,omitempty"`
}
