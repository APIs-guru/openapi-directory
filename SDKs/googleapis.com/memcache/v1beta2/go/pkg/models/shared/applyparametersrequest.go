package shared

// ApplyParametersRequest
// Request for ApplyParameters.
type ApplyParametersRequest struct {
	ApplyAll *bool    `json:"applyAll,omitempty"`
	NodeIds  []string `json:"nodeIds,omitempty"`
}
