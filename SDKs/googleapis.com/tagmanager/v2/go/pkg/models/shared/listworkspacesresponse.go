package shared

// ListWorkspacesResponse
// A list of workspaces in a container.
type ListWorkspacesResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Workspace     []Workspace `json:"workspace,omitempty"`
}
