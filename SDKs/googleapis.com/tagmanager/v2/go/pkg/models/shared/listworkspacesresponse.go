package shared

type ListWorkspacesResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	Workspace     []Workspace `json:"workspace"`
}
