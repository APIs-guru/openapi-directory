package shared

type GoogleCloudServicebrokerV1alpha1ServiceInstance struct {
	Context          map[string]interface{} `json:"context,omitempty"`
	CreateTime       *string                `json:"createTime,omitempty"`
	DeploymentName   *string                `json:"deploymentName,omitempty"`
	InstanceID       *string                `json:"instance_id,omitempty"`
	OrganizationGUID *string                `json:"organization_guid,omitempty"`
	Parameters       map[string]interface{} `json:"parameters,omitempty"`
	PlanID           *string                `json:"plan_id,omitempty"`
	PreviousValues   map[string]interface{} `json:"previous_values,omitempty"`
	ResourceName     *string                `json:"resourceName,omitempty"`
	ServiceID        *string                `json:"service_id,omitempty"`
	SpaceGUID        *string                `json:"space_guid,omitempty"`
}
