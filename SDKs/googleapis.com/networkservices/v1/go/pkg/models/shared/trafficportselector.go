package shared

// TrafficPortSelector
// Specification of a port-based selector.
type TrafficPortSelector struct {
	Ports []string `json:"ports,omitempty"`
}
