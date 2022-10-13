package shared

type CloudSQLInstanceInfo struct {
	DisplayName *string `json:"displayName"`
	ExternalIP  *string `json:"externalIp"`
	InternalIP  *string `json:"internalIp"`
	NetworkURI  *string `json:"networkUri"`
	Region      *string `json:"region"`
	URI         *string `json:"uri"`
}
