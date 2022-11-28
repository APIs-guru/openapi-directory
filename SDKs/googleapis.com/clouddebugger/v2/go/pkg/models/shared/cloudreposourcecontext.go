package shared

// CloudRepoSourceContext
// A CloudRepoSourceContext denotes a particular revision in a cloud repo (a repo hosted by the Google Cloud Platform).
type CloudRepoSourceContext struct {
	AliasContext *AliasContext `json:"aliasContext,omitempty"`
	AliasName    *string       `json:"aliasName,omitempty"`
	RepoID       *RepoID       `json:"repoId,omitempty"`
	RevisionID   *string       `json:"revisionId,omitempty"`
}
