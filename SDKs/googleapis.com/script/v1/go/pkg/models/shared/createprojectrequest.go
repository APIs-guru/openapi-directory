package shared

type CreateProjectRequest struct {
	ParentID *string `json:"parentId,omitempty"`
	Title    *string `json:"title,omitempty"`
}
