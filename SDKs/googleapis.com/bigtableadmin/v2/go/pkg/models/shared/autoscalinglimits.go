package shared

type AutoscalingLimits struct {
	MaxServeNodes *int32 `json:"maxServeNodes,omitempty"`
	MinServeNodes *int32 `json:"minServeNodes,omitempty"`
}
