package shared

// InstancesListServerCasResponse
// Instances ListServerCas response.
type InstancesListServerCasResponse struct {
	ActiveVersion *string   `json:"activeVersion,omitempty"`
	Certs         []SslCert `json:"certs,omitempty"`
	Kind          *string   `json:"kind,omitempty"`
}
