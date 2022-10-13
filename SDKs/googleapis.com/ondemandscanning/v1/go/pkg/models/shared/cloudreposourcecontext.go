package shared

type CloudRepoSourceContext struct {
	AliasContext *AliasContext `json:"aliasContext"`
	RepoID       *RepoID       `json:"repoId"`
	RevisionID   *string       `json:"revisionId"`
}
