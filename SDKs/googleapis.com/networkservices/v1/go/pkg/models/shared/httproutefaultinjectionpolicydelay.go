package shared

type HTTPRouteFaultInjectionPolicyDelay struct {
	FixedDelay *string `json:"fixedDelay"`
	Percentage *int32  `json:"percentage"`
}
