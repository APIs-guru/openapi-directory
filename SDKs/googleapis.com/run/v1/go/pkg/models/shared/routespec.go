package shared

// RouteSpec
// RouteSpec holds the desired state of the Route (from the client).
type RouteSpec struct {
	Traffic []TrafficTarget `json:"traffic,omitempty"`
}
