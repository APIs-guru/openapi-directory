package shared

type GoogleCloudServicebrokerV1alpha1ServiceInstance struct {
	Context          map[string]interface{} `json:"context"`
	CreateTime       *string                `json:"createTime"`
	DeploymentName   *string                `json:"deploymentName"`
	InstanceID       *string                `json:"instance_id"`
	OrganizationGUID *string                `json:"organization_guid"`
	Parameters       map[string]interface{} `json:"parameters"`
	PlanID           *string                `json:"plan_id"`
	PreviousValues   map[string]interface{} `json:"previous_values"`
	ResourceName     *string                `json:"resourceName"`
	ServiceID        *string                `json:"service_id"`
	SpaceGUID        *string                `json:"space_guid"`
}
