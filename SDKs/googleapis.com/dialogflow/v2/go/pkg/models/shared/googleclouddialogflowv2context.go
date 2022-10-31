package shared

type GoogleCloudDialogflowV2Context struct {
	LifespanCount *int32                 `json:"lifespanCount,omitempty"`
	Name          *string                `json:"name,omitempty"`
	Parameters    map[string]interface{} `json:"parameters,omitempty"`
}
