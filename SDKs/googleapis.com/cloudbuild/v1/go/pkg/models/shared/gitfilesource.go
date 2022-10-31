package shared




type GitFileSourceRepoTypeEnum string

const (
    GitFileSourceRepoTypeEnumUnknown GitFileSourceRepoTypeEnum = "UNKNOWN"
GitFileSourceRepoTypeEnumCloudSourceRepositories GitFileSourceRepoTypeEnum = "CLOUD_SOURCE_REPOSITORIES"
GitFileSourceRepoTypeEnumGithub GitFileSourceRepoTypeEnum = "GITHUB"
GitFileSourceRepoTypeEnumBitbucketServer GitFileSourceRepoTypeEnum = "BITBUCKET_SERVER"
)


type GitFileSource struct {
    BitbucketServerConfig *string `json:"bitbucketServerConfig,omitempty"`
    GithubEnterpriseConfig *string `json:"githubEnterpriseConfig,omitempty"`
    Path *string `json:"path,omitempty"`
    RepoType *GitFileSourceRepoTypeEnum `json:"repoType,omitempty"`
    Revision *string `json:"revision,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

