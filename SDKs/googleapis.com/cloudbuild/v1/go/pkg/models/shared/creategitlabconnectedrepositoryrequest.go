package shared

type CreateGitLabConnectedRepositoryRequest struct {
	GitlabConnectedRepository *GitLabConnectedRepository `json:"gitlabConnectedRepository"`
	Parent                    *string                    `json:"parent"`
}
