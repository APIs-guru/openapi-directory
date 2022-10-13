package shared

type OnPremisesConfiguration struct {
	CaCertificate     *string            `json:"caCertificate"`
	ClientCertificate *string            `json:"clientCertificate"`
	ClientKey         *string            `json:"clientKey"`
	DumpFilePath      *string            `json:"dumpFilePath"`
	HostPort          *string            `json:"hostPort"`
	Kind              *string            `json:"kind"`
	Password          *string            `json:"password"`
	SourceInstance    *InstanceReference `json:"sourceInstance"`
	Username          *string            `json:"username"`
}
