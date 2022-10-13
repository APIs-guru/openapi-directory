package shared

type Peer struct {
	IP         *string           `json:"ip"`
	Labels     map[string]string `json:"labels"`
	Port       *string           `json:"port"`
	Principal  *string           `json:"principal"`
	RegionCode *string           `json:"regionCode"`
}
