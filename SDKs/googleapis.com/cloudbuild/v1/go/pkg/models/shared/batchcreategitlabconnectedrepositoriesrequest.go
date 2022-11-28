package shared

// BatchCreateGitLabConnectedRepositoriesRequestInput
// RPC request object accepted by BatchCreateGitLabConnectedRepositories RPC method.
type BatchCreateGitLabConnectedRepositoriesRequestInput struct {
	Requests []CreateGitLabConnectedRepositoryRequestInput `json:"requests,omitempty"`
}
