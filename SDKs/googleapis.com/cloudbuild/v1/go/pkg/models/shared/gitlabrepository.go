package shared



type GitLabRepository struct {
    BrowseURI *string `json:"browseUri,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    RepositoryID *GitLabRepositoryID `json:"repositoryId,omitempty"`
    
}

