package shared



type PagespeedAPILoadingExperienceV5 struct {
    ID *string `json:"id,omitempty"`
    InitialURL *string `json:"initial_url,omitempty"`
    Metrics map[string]UserPageLoadMetricV5 `json:"metrics,omitempty"`
    OriginFallback *bool `json:"origin_fallback,omitempty"`
    OverallCategory *string `json:"overall_category,omitempty"`
    
}

