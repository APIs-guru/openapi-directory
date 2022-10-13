package shared

type GoogleCloudRunV2Volume struct {
	CloudSQLInstance *GoogleCloudRunV2CloudSQLInstance   `json:"cloudSqlInstance"`
	Name             *string                             `json:"name"`
	Secret           *GoogleCloudRunV2SecretVolumeSource `json:"secret"`
}
