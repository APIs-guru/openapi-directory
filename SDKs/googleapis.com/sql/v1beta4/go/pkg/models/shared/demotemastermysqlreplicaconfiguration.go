package shared

type DemoteMasterMySQLReplicaConfiguration struct {
	CaCertificate     *string `json:"caCertificate,omitempty"`
	ClientCertificate *string `json:"clientCertificate,omitempty"`
	ClientKey         *string `json:"clientKey,omitempty"`
	Kind              *string `json:"kind,omitempty"`
	Password          *string `json:"password,omitempty"`
	Username          *string `json:"username,omitempty"`
}
