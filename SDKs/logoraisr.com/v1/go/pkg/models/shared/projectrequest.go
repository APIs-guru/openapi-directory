package shared

type ProjectRequest struct {
	FileID       string   `json:"file_id"`
	Process      *Process `json:"process"`
	ProjectTitle string   `json:"project_title"`
}
