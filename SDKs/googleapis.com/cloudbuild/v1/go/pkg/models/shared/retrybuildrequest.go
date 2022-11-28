package shared

// RetryBuildRequest
// Specifies a build to retry.
type RetryBuildRequest struct {
	ID        *string `json:"id,omitempty"`
	Name      *string `json:"name,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
}
