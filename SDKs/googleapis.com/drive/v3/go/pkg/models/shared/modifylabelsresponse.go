package shared

type ModifyLabelsResponse struct {
	Kind           *string `json:"kind"`
	ModifiedLabels []Label `json:"modifiedLabels"`
}
