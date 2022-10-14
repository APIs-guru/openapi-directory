package shared

type CustomViewabilityMetricConfiguration struct {
	Audible            *bool  `json:"audible,omitempty"`
	TimeMillis         *int32 `json:"timeMillis,omitempty"`
	TimePercent        *int32 `json:"timePercent,omitempty"`
	ViewabilityPercent *int32 `json:"viewabilityPercent,omitempty"`
}
