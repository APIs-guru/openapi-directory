package shared

type RetryBuildRequest struct {
	ID        *string `json:"id"`
	Name      *string `json:"name"`
	ProjectID *string `json:"projectId"`
}
