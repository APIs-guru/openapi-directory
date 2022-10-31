package shared

type ProjectConfig struct {
	EnablePrivateKeyCheck *bool                   `json:"enablePrivateKeyCheck,omitempty"`
	Name                  *string                 `json:"name,omitempty"`
	PubsubConfigs         map[string]PubsubConfig `json:"pubsubConfigs,omitempty"`
}
