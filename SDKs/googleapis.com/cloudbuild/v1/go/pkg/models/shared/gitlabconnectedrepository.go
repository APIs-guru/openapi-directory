package shared

// GitLabConnectedRepositoryInput
// GitLabConnectedRepository represents a GitLab connected repository request response.
type GitLabConnectedRepositoryInput struct {
	Parent *string                  `json:"parent,omitempty"`
	Repo   *GitLabRepositoryIDInput `json:"repo,omitempty"`
	Status *Status                  `json:"status,omitempty"`
}
