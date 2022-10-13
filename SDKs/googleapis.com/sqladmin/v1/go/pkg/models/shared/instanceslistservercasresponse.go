package shared

type InstancesListServerCasResponse struct {
	ActiveVersion *string   `json:"activeVersion"`
	Certs         []SslCert `json:"certs"`
	Kind          *string   `json:"kind"`
}
