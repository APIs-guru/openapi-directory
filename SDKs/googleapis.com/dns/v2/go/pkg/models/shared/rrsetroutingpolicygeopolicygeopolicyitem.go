package shared

type RrSetRoutingPolicyGeoPolicyGeoPolicyItem struct {
	HealthCheckedTargets *RrSetRoutingPolicyHealthCheckTargets `json:"healthCheckedTargets"`
	Kind                 *string                               `json:"kind"`
	Location             *string                               `json:"location"`
	Rrdatas              []string                              `json:"rrdatas"`
	SignatureRrdatas     []string                              `json:"signatureRrdatas"`
}
