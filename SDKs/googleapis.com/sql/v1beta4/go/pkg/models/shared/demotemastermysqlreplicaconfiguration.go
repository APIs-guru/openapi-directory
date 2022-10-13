package shared

type DemoteMasterMySQLReplicaConfiguration struct {
	CaCertificate     *string `json:"caCertificate"`
	ClientCertificate *string `json:"clientCertificate"`
	ClientKey         *string `json:"clientKey"`
	Kind              *string `json:"kind"`
	Password          *string `json:"password"`
	Username          *string `json:"username"`
}
