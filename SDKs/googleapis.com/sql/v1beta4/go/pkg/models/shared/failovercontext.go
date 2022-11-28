package shared

// FailoverContext
// Database instance failover context.
type FailoverContext struct {
	Kind            *string `json:"kind,omitempty"`
	SettingsVersion *string `json:"settingsVersion,omitempty"`
}
