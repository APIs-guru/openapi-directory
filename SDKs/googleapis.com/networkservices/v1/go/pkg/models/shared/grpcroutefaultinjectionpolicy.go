package shared

type GrpcRouteFaultInjectionPolicy struct {
	Abort *GrpcRouteFaultInjectionPolicyAbort `json:"abort"`
	Delay *GrpcRouteFaultInjectionPolicyDelay `json:"delay"`
}
