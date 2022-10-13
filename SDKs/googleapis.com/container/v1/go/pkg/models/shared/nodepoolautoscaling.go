package shared

type NodePoolAutoscalingLocationPolicyEnum string

const (
	NodePoolAutoscalingLocationPolicyEnumLocationPolicyUnspecified NodePoolAutoscalingLocationPolicyEnum = "LOCATION_POLICY_UNSPECIFIED"
	NodePoolAutoscalingLocationPolicyEnumBalanced                  NodePoolAutoscalingLocationPolicyEnum = "BALANCED"
	NodePoolAutoscalingLocationPolicyEnumAny                       NodePoolAutoscalingLocationPolicyEnum = "ANY"
)

type NodePoolAutoscaling struct {
	Autoprovisioned   *bool                                  `json:"autoprovisioned"`
	Enabled           *bool                                  `json:"enabled"`
	LocationPolicy    *NodePoolAutoscalingLocationPolicyEnum `json:"locationPolicy"`
	MaxNodeCount      *int32                                 `json:"maxNodeCount"`
	MinNodeCount      *int32                                 `json:"minNodeCount"`
	TotalMaxNodeCount *int32                                 `json:"totalMaxNodeCount"`
	TotalMinNodeCount *int32                                 `json:"totalMinNodeCount"`
}
