package shared

type CloudSQLConnectionProfile struct {
	CloudSQLID *string           `json:"cloudSqlId"`
	PrivateIP  *string           `json:"privateIp"`
	PublicIP   *string           `json:"publicIp"`
	Settings   *CloudSQLSettings `json:"settings"`
}
