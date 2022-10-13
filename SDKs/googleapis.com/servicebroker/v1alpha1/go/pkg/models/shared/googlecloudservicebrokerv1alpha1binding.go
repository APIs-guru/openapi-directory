package shared

type GoogleCloudServicebrokerV1alpha1Binding struct {
	BindResource map[string]interface{} `json:"bind_resource"`
	BindingID    *string                `json:"binding_id"`
	CreateTime   *string                `json:"createTime"`
	Parameters   map[string]interface{} `json:"parameters"`
	PlanID       *string                `json:"plan_id"`
	ServiceID    *string                `json:"service_id"`
}
