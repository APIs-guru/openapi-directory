package shared

type ModifyLabelsResponse struct {
	Kind           *string `json:"kind,omitempty"`
	ModifiedLabels []Label `json:"modifiedLabels,omitempty"`
}
