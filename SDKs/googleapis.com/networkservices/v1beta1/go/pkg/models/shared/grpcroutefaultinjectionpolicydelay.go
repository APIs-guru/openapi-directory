package shared

type GrpcRouteFaultInjectionPolicyDelay struct {
	FixedDelay *string `json:"fixedDelay"`
	Percentage *int32  `json:"percentage"`
}
