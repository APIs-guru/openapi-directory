package shared

type PostgresqlProfile struct {
	Database *string `json:"database,omitempty"`
	Hostname *string `json:"hostname,omitempty"`
	Password *string `json:"password,omitempty"`
	Port     *int32  `json:"port,omitempty"`
	Username *string `json:"username,omitempty"`
}
