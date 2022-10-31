package shared



type ProjectRequest struct {
    FileID string `json:"file_id"`
    Process *Process `json:"process,omitempty"`
    ProjectTitle string `json:"project_title"`
    
}

