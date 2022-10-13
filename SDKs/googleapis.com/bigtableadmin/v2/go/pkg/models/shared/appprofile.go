package shared

type AppProfile struct {
	Description               *string                    `json:"description"`
	Etag                      *string                    `json:"etag"`
	MultiClusterRoutingUseAny *MultiClusterRoutingUseAny `json:"multiClusterRoutingUseAny"`
	Name                      *string                    `json:"name"`
	SingleClusterRouting      *SingleClusterRouting      `json:"singleClusterRouting"`
}
