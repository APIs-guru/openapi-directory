package shared

type NetworkEndpoint struct {
	AccessConfig *AccessConfig `json:"accessConfig"`
	IPAddress    *string       `json:"ipAddress"`
	Port         *int32        `json:"port"`
}
