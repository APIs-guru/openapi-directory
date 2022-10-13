package shared

type AutoscalingLimits struct {
	MaxServeNodes *int32 `json:"maxServeNodes"`
	MinServeNodes *int32 `json:"minServeNodes"`
}
