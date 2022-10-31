package shared

type MysqlProfile struct {
	Hostname  *string         `json:"hostname,omitempty"`
	Password  *string         `json:"password,omitempty"`
	Port      *int32          `json:"port,omitempty"`
	SslConfig *MysqlSslConfig `json:"sslConfig,omitempty"`
	Username  *string         `json:"username,omitempty"`
}
