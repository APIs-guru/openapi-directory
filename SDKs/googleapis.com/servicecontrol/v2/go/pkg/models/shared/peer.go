package shared

type Peer struct {
	IP         *string           `json:"ip,omitempty"`
	Labels     map[string]string `json:"labels,omitempty"`
	Port       *string           `json:"port,omitempty"`
	Principal  *string           `json:"principal,omitempty"`
	RegionCode *string           `json:"regionCode,omitempty"`
}
