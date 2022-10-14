package shared

type RetryBuildRequest struct {
	ID        *string `json:"id,omitempty"`
	Name      *string `json:"name,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
}
