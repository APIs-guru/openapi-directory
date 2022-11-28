package shared

// RemoveGitLabConnectedRepositoryRequestInput
// RPC request object accepted by RemoveGitLabConnectedRepository RPC method.
type RemoveGitLabConnectedRepositoryRequestInput struct {
	ConnectedRepository *GitLabRepositoryIDInput `json:"connectedRepository,omitempty"`
}
