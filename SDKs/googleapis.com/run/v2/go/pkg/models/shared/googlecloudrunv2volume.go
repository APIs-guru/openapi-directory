package shared



type GoogleCloudRunV2Volume struct {
    CloudSQLInstance *GoogleCloudRunV2CloudSQLInstance `json:"cloudSqlInstance,omitempty"`
    Name *string `json:"name,omitempty"`
    Secret *GoogleCloudRunV2SecretVolumeSource `json:"secret,omitempty"`
    
}

