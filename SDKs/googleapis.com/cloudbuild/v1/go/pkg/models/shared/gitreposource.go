package shared

type GitRepoSourceRepoTypeEnum string

const (
	GitRepoSourceRepoTypeEnumUnknown                 GitRepoSourceRepoTypeEnum = "UNKNOWN"
	GitRepoSourceRepoTypeEnumCloudSourceRepositories GitRepoSourceRepoTypeEnum = "CLOUD_SOURCE_REPOSITORIES"
	GitRepoSourceRepoTypeEnumGithub                  GitRepoSourceRepoTypeEnum = "GITHUB"
	GitRepoSourceRepoTypeEnumBitbucketServer         GitRepoSourceRepoTypeEnum = "BITBUCKET_SERVER"
)

type GitRepoSource struct {
	BitbucketServerConfig  *string                    `json:"bitbucketServerConfig"`
	GithubEnterpriseConfig *string                    `json:"githubEnterpriseConfig"`
	Ref                    *string                    `json:"ref"`
	RepoType               *GitRepoSourceRepoTypeEnum `json:"repoType"`
	URI                    *string                    `json:"uri"`
}
