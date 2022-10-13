package shared

type MysqlProfile struct {
	Hostname  *string         `json:"hostname"`
	Password  *string         `json:"password"`
	Port      *int32          `json:"port"`
	SslConfig *MysqlSslConfig `json:"sslConfig"`
	Username  *string         `json:"username"`
}
