package shared

// CreateProjectRequest
// Request to create a script project. Request to create a script project.
type CreateProjectRequest struct {
	ParentID *string `json:"parentId,omitempty"`
	Title    *string `json:"title,omitempty"`
}
