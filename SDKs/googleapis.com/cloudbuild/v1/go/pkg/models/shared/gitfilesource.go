package shared

type GitFileSourceRepoTypeEnum string

const (
	GitFileSourceRepoTypeEnumUnknown                 GitFileSourceRepoTypeEnum = "UNKNOWN"
	GitFileSourceRepoTypeEnumCloudSourceRepositories GitFileSourceRepoTypeEnum = "CLOUD_SOURCE_REPOSITORIES"
	GitFileSourceRepoTypeEnumGithub                  GitFileSourceRepoTypeEnum = "GITHUB"
	GitFileSourceRepoTypeEnumBitbucketServer         GitFileSourceRepoTypeEnum = "BITBUCKET_SERVER"
)

type GitFileSource struct {
	BitbucketServerConfig  *string                    `json:"bitbucketServerConfig"`
	GithubEnterpriseConfig *string                    `json:"githubEnterpriseConfig"`
	Path                   *string                    `json:"path"`
	RepoType               *GitFileSourceRepoTypeEnum `json:"repoType"`
	Revision               *string                    `json:"revision"`
	URI                    *string                    `json:"uri"`
}
