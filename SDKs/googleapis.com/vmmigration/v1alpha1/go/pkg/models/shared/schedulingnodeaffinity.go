package shared

type SchedulingNodeAffinityOperatorEnum string

const (
	SchedulingNodeAffinityOperatorEnumOperatorUnspecified SchedulingNodeAffinityOperatorEnum = "OPERATOR_UNSPECIFIED"
	SchedulingNodeAffinityOperatorEnumIn                  SchedulingNodeAffinityOperatorEnum = "IN"
	SchedulingNodeAffinityOperatorEnumNotIn               SchedulingNodeAffinityOperatorEnum = "NOT_IN"
)

// SchedulingNodeAffinity
// Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling
type SchedulingNodeAffinity struct {
	Key      *string                             `json:"key,omitempty"`
	Operator *SchedulingNodeAffinityOperatorEnum `json:"operator,omitempty"`
	Values   []string                            `json:"values,omitempty"`
}
