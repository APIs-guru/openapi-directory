package shared

type PagespeedAPILoadingExperienceV5 struct {
	ID              *string                         `json:"id"`
	InitialURL      *string                         `json:"initial_url"`
	Metrics         map[string]UserPageLoadMetricV5 `json:"metrics"`
	OriginFallback  *bool                           `json:"origin_fallback"`
	OverallCategory *string                         `json:"overall_category"`
}
