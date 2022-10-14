package shared

type NetworkEndpoint struct {
	IPAddress *string `json:"ipAddress,omitempty"`
	Port      *int32  `json:"port,omitempty"`
}
