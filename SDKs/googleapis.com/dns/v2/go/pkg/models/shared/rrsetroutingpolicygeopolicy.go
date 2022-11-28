package shared

// RrSetRoutingPolicyGeoPolicy
// Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.
type RrSetRoutingPolicyGeoPolicy struct {
	EnableFencing *bool                                      `json:"enableFencing,omitempty"`
	Items         []RrSetRoutingPolicyGeoPolicyGeoPolicyItem `json:"items,omitempty"`
	Kind          *string                                    `json:"kind,omitempty"`
}
