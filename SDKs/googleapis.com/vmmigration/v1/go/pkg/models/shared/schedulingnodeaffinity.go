package shared




type SchedulingNodeAffinityOperatorEnum string

const (
    SchedulingNodeAffinityOperatorEnumOperatorUnspecified SchedulingNodeAffinityOperatorEnum = "OPERATOR_UNSPECIFIED"
SchedulingNodeAffinityOperatorEnumIn SchedulingNodeAffinityOperatorEnum = "IN"
SchedulingNodeAffinityOperatorEnumNotIn SchedulingNodeAffinityOperatorEnum = "NOT_IN"
)


type SchedulingNodeAffinity struct {
    Key *string `json:"key,omitempty"`
    Operator *SchedulingNodeAffinityOperatorEnum `json:"operator,omitempty"`
    Values []string `json:"values,omitempty"`
    
}

