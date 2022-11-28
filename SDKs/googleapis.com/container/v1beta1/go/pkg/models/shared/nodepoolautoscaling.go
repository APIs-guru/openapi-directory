package shared

type NodePoolAutoscalingLocationPolicyEnum string

const (
	NodePoolAutoscalingLocationPolicyEnumLocationPolicyUnspecified NodePoolAutoscalingLocationPolicyEnum = "LOCATION_POLICY_UNSPECIFIED"
	NodePoolAutoscalingLocationPolicyEnumBalanced                  NodePoolAutoscalingLocationPolicyEnum = "BALANCED"
	NodePoolAutoscalingLocationPolicyEnumAny                       NodePoolAutoscalingLocationPolicyEnum = "ANY"
)

// NodePoolAutoscaling
// NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
type NodePoolAutoscaling struct {
	Autoprovisioned   *bool                                  `json:"autoprovisioned,omitempty"`
	Enabled           *bool                                  `json:"enabled,omitempty"`
	LocationPolicy    *NodePoolAutoscalingLocationPolicyEnum `json:"locationPolicy,omitempty"`
	MaxNodeCount      *int32                                 `json:"maxNodeCount,omitempty"`
	MinNodeCount      *int32                                 `json:"minNodeCount,omitempty"`
	TotalMaxNodeCount *int32                                 `json:"totalMaxNodeCount,omitempty"`
	TotalMinNodeCount *int32                                 `json:"totalMinNodeCount,omitempty"`
}
