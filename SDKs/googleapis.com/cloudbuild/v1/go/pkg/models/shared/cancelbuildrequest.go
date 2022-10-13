package shared

type CancelBuildRequest struct {
	ID        *string `json:"id"`
	Name      *string `json:"name"`
	ProjectID *string `json:"projectId"`
}
