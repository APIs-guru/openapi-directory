package shared



type UsageRule struct {
    AllowUnregisteredCalls *bool `json:"allowUnregisteredCalls,omitempty"`
    Selector *string `json:"selector,omitempty"`
    SkipServiceControl *bool `json:"skipServiceControl,omitempty"`
    
}

