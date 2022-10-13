package shared

type SubmitConfigSourceRequest struct {
	ConfigSource *ConfigSource `json:"configSource"`
	ValidateOnly *bool         `json:"validateOnly"`
}
