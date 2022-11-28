package shared

// EncryptionConfig
// The encryption options for the Cloud Composer environment and its dependencies. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
type EncryptionConfig struct {
	KmsKeyName *string `json:"kmsKeyName,omitempty"`
}
