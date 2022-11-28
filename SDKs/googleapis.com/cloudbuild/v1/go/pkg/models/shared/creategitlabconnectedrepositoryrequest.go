package shared

// CreateGitLabConnectedRepositoryRequestInput
// Request to connect a repository from a connected GitLab host.
type CreateGitLabConnectedRepositoryRequestInput struct {
	GitlabConnectedRepository *GitLabConnectedRepositoryInput `json:"gitlabConnectedRepository,omitempty"`
	Parent                    *string                         `json:"parent,omitempty"`
}
