package shared

// CloudRepoSourceContext
// A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
type CloudRepoSourceContext struct {
	AliasContext *AliasContext `json:"aliasContext,omitempty"`
	RepoID       *RepoID       `json:"repoId,omitempty"`
	RevisionID   *string       `json:"revisionId,omitempty"`
}
