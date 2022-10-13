package shared

type RrSetRoutingPolicyGeoPolicy struct {
	EnableFencing *bool                                      `json:"enableFencing"`
	Items         []RrSetRoutingPolicyGeoPolicyGeoPolicyItem `json:"items"`
	Kind          *string                                    `json:"kind"`
}
