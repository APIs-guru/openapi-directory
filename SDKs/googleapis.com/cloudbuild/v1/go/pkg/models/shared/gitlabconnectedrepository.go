package shared

type GitLabConnectedRepository struct {
	Parent *string             `json:"parent"`
	Repo   *GitLabRepositoryID `json:"repo"`
	Status *Status             `json:"status"`
}
