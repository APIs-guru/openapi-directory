package shared

type CreateGitLabConnectedRepositoryRequest struct {
	GitlabConnectedRepository *GitLabConnectedRepository `json:"gitlabConnectedRepository,omitempty"`
	Parent                    *string                    `json:"parent,omitempty"`
}
