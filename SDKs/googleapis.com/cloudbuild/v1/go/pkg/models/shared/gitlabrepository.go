package shared

type GitLabRepository struct {
	BrowseURI    *string             `json:"browseUri"`
	Description  *string             `json:"description"`
	DisplayName  *string             `json:"displayName"`
	Name         *string             `json:"name"`
	RepositoryID *GitLabRepositoryID `json:"repositoryId"`
}
