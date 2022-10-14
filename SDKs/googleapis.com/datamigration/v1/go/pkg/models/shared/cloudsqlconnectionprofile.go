package shared

type CloudSQLConnectionProfile struct {
	CloudSQLID *string           `json:"cloudSqlId,omitempty"`
	PrivateIP  *string           `json:"privateIp,omitempty"`
	PublicIP   *string           `json:"publicIp,omitempty"`
	Settings   *CloudSQLSettings `json:"settings,omitempty"`
}
