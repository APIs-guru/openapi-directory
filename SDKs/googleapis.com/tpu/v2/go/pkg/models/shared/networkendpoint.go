package shared

// NetworkEndpoint
// A network endpoint over which a TPU worker can be reached.
type NetworkEndpoint struct {
	AccessConfig *AccessConfig `json:"accessConfig,omitempty"`
	IPAddress    *string       `json:"ipAddress,omitempty"`
	Port         *int32        `json:"port,omitempty"`
}
