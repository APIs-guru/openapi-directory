package shared

// AccessConfig
// An access config attached to the TPU worker.
type AccessConfig struct {
	ExternalIP *string `json:"externalIp,omitempty"`
}
