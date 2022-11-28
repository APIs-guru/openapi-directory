package shared

// NetworkEndpoint
// A network endpoint over which a TPU worker can be reached.
type NetworkEndpoint struct {
	IPAddress *string `json:"ipAddress,omitempty"`
	Port      *int32  `json:"port,omitempty"`
}
