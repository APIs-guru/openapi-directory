package shared

// HTTPRouteFaultInjectionPolicyDelay
// Specification of how client requests are delayed as part of fault injection before being sent to a destination.
type HTTPRouteFaultInjectionPolicyDelay struct {
	FixedDelay *string `json:"fixedDelay,omitempty"`
	Percentage *int32  `json:"percentage,omitempty"`
}
