package shared

// MySQLConnectionProfileInput
// Specifies connection parameters required specifically for MySQL databases.
type MySQLConnectionProfileInput struct {
	CloudSQLID *string         `json:"cloudSqlId,omitempty"`
	Host       *string         `json:"host,omitempty"`
	Password   *string         `json:"password,omitempty"`
	Port       *int32          `json:"port,omitempty"`
	Ssl        *SslConfigInput `json:"ssl,omitempty"`
	Username   *string         `json:"username,omitempty"`
}

// MySQLConnectionProfile
// Specifies connection parameters required specifically for MySQL databases.
type MySQLConnectionProfile struct {
	CloudSQLID  *string    `json:"cloudSqlId,omitempty"`
	Host        *string    `json:"host,omitempty"`
	Password    *string    `json:"password,omitempty"`
	PasswordSet *bool      `json:"passwordSet,omitempty"`
	Port        *int32     `json:"port,omitempty"`
	Ssl         *SslConfig `json:"ssl,omitempty"`
	Username    *string    `json:"username,omitempty"`
}
