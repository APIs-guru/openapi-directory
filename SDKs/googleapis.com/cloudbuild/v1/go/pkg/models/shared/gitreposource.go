package shared

type GitRepoSourceRepoTypeEnum string

const (
	GitRepoSourceRepoTypeEnumUnknown                 GitRepoSourceRepoTypeEnum = "UNKNOWN"
	GitRepoSourceRepoTypeEnumCloudSourceRepositories GitRepoSourceRepoTypeEnum = "CLOUD_SOURCE_REPOSITORIES"
	GitRepoSourceRepoTypeEnumGithub                  GitRepoSourceRepoTypeEnum = "GITHUB"
	GitRepoSourceRepoTypeEnumBitbucketServer         GitRepoSourceRepoTypeEnum = "BITBUCKET_SERVER"
)

// GitRepoSource
// GitRepoSource describes a repo and ref of a code repository.
type GitRepoSource struct {
	BitbucketServerConfig  *string                    `json:"bitbucketServerConfig,omitempty"`
	GithubEnterpriseConfig *string                    `json:"githubEnterpriseConfig,omitempty"`
	Ref                    *string                    `json:"ref,omitempty"`
	RepoType               *GitRepoSourceRepoTypeEnum `json:"repoType,omitempty"`
	URI                    *string                    `json:"uri,omitempty"`
}
