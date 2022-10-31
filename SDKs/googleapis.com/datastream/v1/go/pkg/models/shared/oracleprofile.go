package shared

type OracleProfile struct {
	ConnectionAttributes map[string]string `json:"connectionAttributes,omitempty"`
	DatabaseService      *string           `json:"databaseService,omitempty"`
	Hostname             *string           `json:"hostname,omitempty"`
	Password             *string           `json:"password,omitempty"`
	Port                 *int32            `json:"port,omitempty"`
	Username             *string           `json:"username,omitempty"`
}
