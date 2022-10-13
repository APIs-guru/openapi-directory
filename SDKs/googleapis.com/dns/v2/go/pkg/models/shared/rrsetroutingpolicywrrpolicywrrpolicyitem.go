package shared

type RrSetRoutingPolicyWrrPolicyWrrPolicyItem struct {
	HealthCheckedTargets *RrSetRoutingPolicyHealthCheckTargets `json:"healthCheckedTargets"`
	Kind                 *string                               `json:"kind"`
	Rrdatas              []string                              `json:"rrdatas"`
	SignatureRrdatas     []string                              `json:"signatureRrdatas"`
	Weight               *float64                              `json:"weight"`
}
