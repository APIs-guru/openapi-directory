package shared



type GrpcRouteFaultInjectionPolicyDelay struct {
    FixedDelay *string `json:"fixedDelay,omitempty"`
    Percentage *int32 `json:"percentage,omitempty"`
    
}

