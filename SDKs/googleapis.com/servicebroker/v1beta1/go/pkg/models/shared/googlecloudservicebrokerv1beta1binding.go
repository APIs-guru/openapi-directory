package shared

// GoogleCloudServicebrokerV1beta1Binding
// Describes the binding.
type GoogleCloudServicebrokerV1beta1Binding struct {
	BindResource   map[string]interface{} `json:"bind_resource,omitempty"`
	BindingID      *string                `json:"binding_id,omitempty"`
	CreateTime     *string                `json:"createTime,omitempty"`
	DeploymentName *string                `json:"deploymentName,omitempty"`
	Parameters     map[string]interface{} `json:"parameters,omitempty"`
	PlanID         *string                `json:"plan_id,omitempty"`
	ResourceName   *string                `json:"resourceName,omitempty"`
	ServiceID      *string                `json:"service_id,omitempty"`
}
