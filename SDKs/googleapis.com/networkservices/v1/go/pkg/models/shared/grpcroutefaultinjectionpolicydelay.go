package shared

// GrpcRouteFaultInjectionPolicyDelay
// Specification of how client requests are delayed as part of fault injection before being sent to a destination.
type GrpcRouteFaultInjectionPolicyDelay struct {
	FixedDelay *string `json:"fixedDelay,omitempty"`
	Percentage *int32  `json:"percentage,omitempty"`
}
