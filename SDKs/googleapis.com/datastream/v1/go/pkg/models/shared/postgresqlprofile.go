package shared

type PostgresqlProfile struct {
	Database *string `json:"database"`
	Hostname *string `json:"hostname"`
	Password *string `json:"password"`
	Port     *int32  `json:"port"`
	Username *string `json:"username"`
}
