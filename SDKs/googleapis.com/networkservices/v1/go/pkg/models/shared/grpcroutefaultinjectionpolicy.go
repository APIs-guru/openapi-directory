package shared



type GrpcRouteFaultInjectionPolicy struct {
    Abort *GrpcRouteFaultInjectionPolicyAbort `json:"abort,omitempty"`
    Delay *GrpcRouteFaultInjectionPolicyDelay `json:"delay,omitempty"`
    
}

