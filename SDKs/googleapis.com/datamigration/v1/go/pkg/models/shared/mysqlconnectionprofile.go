package shared

type MySQLConnectionProfile struct {
	CloudSQLID  *string    `json:"cloudSqlId"`
	Host        *string    `json:"host"`
	Password    *string    `json:"password"`
	PasswordSet *bool      `json:"passwordSet"`
	Port        *int32     `json:"port"`
	Ssl         *SslConfig `json:"ssl"`
	Username    *string    `json:"username"`
}
