package shared

// CloudSQLConfig
// Cloud SQL configuration.
type CloudSQLConfig struct {
	Service         *string `json:"service,omitempty"`
	UmbrellaNetwork *string `json:"umbrellaNetwork,omitempty"`
	UmbrellaProject *string `json:"umbrellaProject,omitempty"`
}
