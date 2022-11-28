package shared

// DatabaseConfig
// The configuration of Cloud SQL instance that is used by the Apache Airflow software.
type DatabaseConfig struct {
	MachineType *string `json:"machineType,omitempty"`
}
