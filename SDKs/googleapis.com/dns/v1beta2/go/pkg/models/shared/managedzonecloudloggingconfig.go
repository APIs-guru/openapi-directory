package shared

type ManagedZoneCloudLoggingConfig struct {
	EnableLogging *bool   `json:"enableLogging,omitempty"`
	Kind          *string `json:"kind,omitempty"`
}
