package shared

type NetworkEndpoint struct {
	IPAddress *string `json:"ipAddress"`
	Port      *int32  `json:"port"`
}
