package shared

type Destination struct {
	Hosts           []string         `json:"hosts"`
	HTTPHeaderMatch *HTTPHeaderMatch `json:"httpHeaderMatch"`
	Methods         []string         `json:"methods"`
	Ports           []int64          `json:"ports"`
}
