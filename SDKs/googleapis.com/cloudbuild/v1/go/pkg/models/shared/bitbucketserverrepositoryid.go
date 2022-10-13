package shared

type BitbucketServerRepositoryID struct {
	ProjectKey *string `json:"projectKey"`
	RepoSlug   *string `json:"repoSlug"`
	WebhookID  *int32  `json:"webhookId"`
}
