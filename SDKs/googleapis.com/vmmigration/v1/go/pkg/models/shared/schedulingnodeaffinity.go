package shared

type SchedulingNodeAffinityOperatorEnum string

const (
	SchedulingNodeAffinityOperatorEnumOperatorUnspecified SchedulingNodeAffinityOperatorEnum = "OPERATOR_UNSPECIFIED"
	SchedulingNodeAffinityOperatorEnumIn                  SchedulingNodeAffinityOperatorEnum = "IN"
	SchedulingNodeAffinityOperatorEnumNotIn               SchedulingNodeAffinityOperatorEnum = "NOT_IN"
)

type SchedulingNodeAffinity struct {
	Key      *string                             `json:"key"`
	Operator *SchedulingNodeAffinityOperatorEnum `json:"operator"`
	Values   []string                            `json:"values"`
}
