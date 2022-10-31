package shared



type HTTPRouteFaultInjectionPolicy struct {
    Abort *HTTPRouteFaultInjectionPolicyAbort `json:"abort,omitempty"`
    Delay *HTTPRouteFaultInjectionPolicyDelay `json:"delay,omitempty"`
    
}

