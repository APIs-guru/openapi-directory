package shared

type BitbucketServerRepositoryID struct {
	ProjectKey *string `json:"projectKey,omitempty"`
	RepoSlug   *string `json:"repoSlug,omitempty"`
	WebhookID  *int32  `json:"webhookId,omitempty"`
}
