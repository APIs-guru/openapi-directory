package shared

// RrSetRoutingPolicyWrrPolicy
// Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.
type RrSetRoutingPolicyWrrPolicy struct {
	Items []RrSetRoutingPolicyWrrPolicyWrrPolicyItem `json:"items,omitempty"`
	Kind  *string                                    `json:"kind,omitempty"`
}
