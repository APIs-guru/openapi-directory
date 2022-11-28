package shared

// ManagedZoneCloudLoggingConfig
// Cloud Logging configurations for publicly visible zones.
type ManagedZoneCloudLoggingConfig struct {
	EnableLogging *bool   `json:"enableLogging,omitempty"`
	Kind          *string `json:"kind,omitempty"`
}
