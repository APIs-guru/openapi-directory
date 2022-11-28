package shared

// CancelBuildRequest
// Request to cancel an ongoing build.
type CancelBuildRequest struct {
	ID        *string `json:"id,omitempty"`
	Name      *string `json:"name,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
}
