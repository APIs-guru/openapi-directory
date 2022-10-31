package shared

type GitLabConnectedRepository struct {
	Parent *string             `json:"parent,omitempty"`
	Repo   *GitLabRepositoryID `json:"repo,omitempty"`
	Status *Status             `json:"status,omitempty"`
}
