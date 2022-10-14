package shared

type SetNodePoolAutoscalingRequest struct {
	Autoscaling *NodePoolAutoscaling `json:"autoscaling,omitempty"`
	ClusterID   *string              `json:"clusterId,omitempty"`
	Name        *string              `json:"name,omitempty"`
	NodePoolID  *string              `json:"nodePoolId,omitempty"`
	ProjectID   *string              `json:"projectId,omitempty"`
	Zone        *string              `json:"zone,omitempty"`
}
