package shared

type CreateProjectRequest struct {
	ParentID *string `json:"parentId"`
	Title    *string `json:"title"`
}
