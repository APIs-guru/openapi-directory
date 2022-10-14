package shared

type GoogleCloudServicebrokerV1alpha1Binding struct {
	BindResource map[string]interface{} `json:"bind_resource,omitempty"`
	BindingID    *string                `json:"binding_id,omitempty"`
	CreateTime   *string                `json:"createTime,omitempty"`
	Parameters   map[string]interface{} `json:"parameters,omitempty"`
	PlanID       *string                `json:"plan_id,omitempty"`
	ServiceID    *string                `json:"service_id,omitempty"`
}
