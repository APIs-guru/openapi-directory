package shared



type HTTPRouteFaultInjectionPolicyDelay struct {
    FixedDelay *string `json:"fixedDelay,omitempty"`
    Percentage *int32 `json:"percentage,omitempty"`
    
}

