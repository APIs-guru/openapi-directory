package shared

type SetNodePoolAutoscalingRequest struct {
	Autoscaling *NodePoolAutoscaling `json:"autoscaling"`
	ClusterID   *string              `json:"clusterId"`
	Name        *string              `json:"name"`
	NodePoolID  *string              `json:"nodePoolId"`
	ProjectID   *string              `json:"projectId"`
	Zone        *string              `json:"zone"`
}
