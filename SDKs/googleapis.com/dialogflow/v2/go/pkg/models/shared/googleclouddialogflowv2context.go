package shared

type GoogleCloudDialogflowV2Context struct {
	LifespanCount *int32                 `json:"lifespanCount"`
	Name          *string                `json:"name"`
	Parameters    map[string]interface{} `json:"parameters"`
}
