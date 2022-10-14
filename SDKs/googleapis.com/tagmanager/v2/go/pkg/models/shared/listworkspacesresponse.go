package shared

type ListWorkspacesResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Workspace     []Workspace `json:"workspace,omitempty"`
}
