package shared

type GoogleCloudServicebrokerV1beta1Binding struct {
	BindResource   map[string]interface{} `json:"bind_resource"`
	BindingID      *string                `json:"binding_id"`
	CreateTime     *string                `json:"createTime"`
	DeploymentName *string                `json:"deploymentName"`
	Parameters     map[string]interface{} `json:"parameters"`
	PlanID         *string                `json:"plan_id"`
	ResourceName   *string                `json:"resourceName"`
	ServiceID      *string                `json:"service_id"`
}
