package shared

// LoggingConfig
// LoggingConfig is cluster logging configuration.
type LoggingConfig struct {
	ComponentConfig *LoggingComponentConfig `json:"componentConfig,omitempty"`
}
