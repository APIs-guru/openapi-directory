package shared

type CloudRepoSourceContext struct {
	AliasContext *AliasContext `json:"aliasContext"`
	AliasName    *string       `json:"aliasName"`
	RepoID       *RepoID       `json:"repoId"`
	RevisionID   *string       `json:"revisionId"`
}
