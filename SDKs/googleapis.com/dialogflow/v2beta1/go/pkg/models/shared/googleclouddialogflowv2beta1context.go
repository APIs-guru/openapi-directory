package shared

type GoogleCloudDialogflowV2beta1Context struct {
	LifespanCount *int32                 `json:"lifespanCount,omitempty"`
	Name          *string                `json:"name,omitempty"`
	Parameters    map[string]interface{} `json:"parameters,omitempty"`
}
