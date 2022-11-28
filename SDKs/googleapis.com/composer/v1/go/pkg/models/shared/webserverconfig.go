package shared

// WebServerConfig
// The configuration settings for the Airflow web server App Engine instance. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*
type WebServerConfig struct {
	MachineType *string `json:"machineType,omitempty"`
}
