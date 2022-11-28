package shared

// AppProfile
// A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application.
type AppProfile struct {
	Description               *string                    `json:"description,omitempty"`
	Etag                      *string                    `json:"etag,omitempty"`
	MultiClusterRoutingUseAny *MultiClusterRoutingUseAny `json:"multiClusterRoutingUseAny,omitempty"`
	Name                      *string                    `json:"name,omitempty"`
	SingleClusterRouting      *SingleClusterRouting      `json:"singleClusterRouting,omitempty"`
}
