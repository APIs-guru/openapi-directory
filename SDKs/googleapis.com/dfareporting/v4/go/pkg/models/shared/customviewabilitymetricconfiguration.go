package shared

type CustomViewabilityMetricConfiguration struct {
	Audible            *bool  `json:"audible"`
	TimeMillis         *int32 `json:"timeMillis"`
	TimePercent        *int32 `json:"timePercent"`
	ViewabilityPercent *int32 `json:"viewabilityPercent"`
}
