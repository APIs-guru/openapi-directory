package shared

// HTTPLoadBalancing
// Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.
type HTTPLoadBalancing struct {
	Disabled *bool `json:"disabled,omitempty"`
}
