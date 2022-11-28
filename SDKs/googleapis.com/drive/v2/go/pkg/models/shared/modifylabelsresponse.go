package shared

// ModifyLabelsResponse
// Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.
type ModifyLabelsResponse struct {
	Kind           *string `json:"kind,omitempty"`
	ModifiedLabels []Label `json:"modifiedLabels,omitempty"`
}
