package shared

type NetworkEndpoint struct {
	AccessConfig *AccessConfig `json:"accessConfig,omitempty"`
	IPAddress    *string       `json:"ipAddress,omitempty"`
	Port         *int32        `json:"port,omitempty"`
}
