package shared

// ProjectConfig
// Cloud Source Repositories configuration of a project.
type ProjectConfig struct {
	EnablePrivateKeyCheck *bool                   `json:"enablePrivateKeyCheck,omitempty"`
	Name                  *string                 `json:"name,omitempty"`
	PubsubConfigs         map[string]PubsubConfig `json:"pubsubConfigs,omitempty"`
}
