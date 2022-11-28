package shared

// RrSetRoutingPolicyGeoPolicyGeoPolicyItem
// ResourceRecordSet data for one geo location.
type RrSetRoutingPolicyGeoPolicyGeoPolicyItem struct {
	HealthCheckedTargets *RrSetRoutingPolicyHealthCheckTargets `json:"healthCheckedTargets,omitempty"`
	Kind                 *string                               `json:"kind,omitempty"`
	Location             *string                               `json:"location,omitempty"`
	Rrdatas              []string                              `json:"rrdatas,omitempty"`
	SignatureRrdatas     []string                              `json:"signatureRrdatas,omitempty"`
}
