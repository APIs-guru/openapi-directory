package shared

type RepositoryEventConfigRepositoryTypeEnum string

const (
	RepositoryEventConfigRepositoryTypeEnumRepositoryTypeUnspecified RepositoryEventConfigRepositoryTypeEnum = "REPOSITORY_TYPE_UNSPECIFIED"
	RepositoryEventConfigRepositoryTypeEnumGithub                    RepositoryEventConfigRepositoryTypeEnum = "GITHUB"
	RepositoryEventConfigRepositoryTypeEnumGithubEnterprise          RepositoryEventConfigRepositoryTypeEnum = "GITHUB_ENTERPRISE"
	RepositoryEventConfigRepositoryTypeEnumGitlabEnterprise          RepositoryEventConfigRepositoryTypeEnum = "GITLAB_ENTERPRISE"
)

// RepositoryEventConfigInput
// The configuration of a trigger that creates a build whenever an event from Repo API is received.
type RepositoryEventConfigInput struct {
	PullRequest *PullRequestFilter `json:"pullRequest,omitempty"`
	Push        *PushFilter        `json:"push,omitempty"`
	Repository  *string            `json:"repository,omitempty"`
}

// RepositoryEventConfig
// The configuration of a trigger that creates a build whenever an event from Repo API is received.
type RepositoryEventConfig struct {
	PullRequest    *PullRequestFilter                       `json:"pullRequest,omitempty"`
	Push           *PushFilter                              `json:"push,omitempty"`
	Repository     *string                                  `json:"repository,omitempty"`
	RepositoryType *RepositoryEventConfigRepositoryTypeEnum `json:"repositoryType,omitempty"`
}
