package shared

// ApplySoftwareUpdateRequest
// Request for ApplySoftwareUpdate.
type ApplySoftwareUpdateRequest struct {
	ApplyAll *bool    `json:"applyAll,omitempty"`
	NodeIds  []string `json:"nodeIds,omitempty"`
}
