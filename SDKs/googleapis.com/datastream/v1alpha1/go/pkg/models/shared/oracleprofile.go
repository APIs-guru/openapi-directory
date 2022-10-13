package shared

type OracleProfile struct {
	ConnectionAttributes map[string]string `json:"connectionAttributes"`
	DatabaseService      *string           `json:"databaseService"`
	Hostname             *string           `json:"hostname"`
	Password             *string           `json:"password"`
	Port                 *int32            `json:"port"`
	Username             *string           `json:"username"`
}
