package shared

// Destination
// Specification of traffic destination attributes.
type Destination struct {
	Hosts           []string         `json:"hosts,omitempty"`
	HTTPHeaderMatch *HTTPHeaderMatch `json:"httpHeaderMatch,omitempty"`
	Methods         []string         `json:"methods,omitempty"`
	Ports           []int64          `json:"ports,omitempty"`
}
