package shared

type RemoveGitLabConnectedRepositoryRequest struct {
	ConnectedRepository *GitLabRepositoryID `json:"connectedRepository"`
}
