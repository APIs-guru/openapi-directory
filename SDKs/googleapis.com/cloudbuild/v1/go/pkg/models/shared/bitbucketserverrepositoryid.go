package shared

// BitbucketServerRepositoryIDInput
// BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.
type BitbucketServerRepositoryIDInput struct {
	ProjectKey *string `json:"projectKey,omitempty"`
	RepoSlug   *string `json:"repoSlug,omitempty"`
}

// BitbucketServerRepositoryID
// BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.
type BitbucketServerRepositoryID struct {
	ProjectKey *string `json:"projectKey,omitempty"`
	RepoSlug   *string `json:"repoSlug,omitempty"`
	WebhookID  *int32  `json:"webhookId,omitempty"`
}
