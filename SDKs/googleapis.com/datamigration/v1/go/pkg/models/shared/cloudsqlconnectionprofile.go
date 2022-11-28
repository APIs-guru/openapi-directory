package shared

// CloudSQLConnectionProfile
// Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
type CloudSQLConnectionProfile struct {
	AdditionalPublicIP *string           `json:"additionalPublicIp,omitempty"`
	CloudSQLID         *string           `json:"cloudSqlId,omitempty"`
	PrivateIP          *string           `json:"privateIp,omitempty"`
	PublicIP           *string           `json:"publicIp,omitempty"`
	Settings           *CloudSQLSettings `json:"settings,omitempty"`
}

// CloudSQLConnectionProfileInput
// Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
type CloudSQLConnectionProfileInput struct {
	Settings *CloudSQLSettingsInput `json:"settings,omitempty"`
}
