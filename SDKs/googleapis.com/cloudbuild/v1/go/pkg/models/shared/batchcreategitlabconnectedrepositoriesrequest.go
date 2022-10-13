package shared

type BatchCreateGitLabConnectedRepositoriesRequest struct {
	Requests []CreateGitLabConnectedRepositoryRequest `json:"requests"`
}
