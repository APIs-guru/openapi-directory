package shared

type ProjectConfig struct {
	EnablePrivateKeyCheck *bool                   `json:"enablePrivateKeyCheck"`
	Name                  *string                 `json:"name"`
	PubsubConfigs         map[string]PubsubConfig `json:"pubsubConfigs"`
}
