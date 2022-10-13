package shared

type HTTPRouteFaultInjectionPolicy struct {
	Abort *HTTPRouteFaultInjectionPolicyAbort `json:"abort"`
	Delay *HTTPRouteFaultInjectionPolicyDelay `json:"delay"`
}
