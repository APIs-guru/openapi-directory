package shared

// RrSetRoutingPolicyWrrPolicyWrrPolicyItem
// A routing block which contains the routing information for one WRR item.
type RrSetRoutingPolicyWrrPolicyWrrPolicyItem struct {
	HealthCheckedTargets *RrSetRoutingPolicyHealthCheckTargets `json:"healthCheckedTargets,omitempty"`
	Kind                 *string                               `json:"kind,omitempty"`
	Rrdatas              []string                              `json:"rrdatas,omitempty"`
	SignatureRrdatas     []string                              `json:"signatureRrdatas,omitempty"`
	Weight               *float64                              `json:"weight,omitempty"`
}
