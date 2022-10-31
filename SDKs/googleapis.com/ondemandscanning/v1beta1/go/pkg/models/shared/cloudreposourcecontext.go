package shared



type CloudRepoSourceContext struct {
    AliasContext *AliasContext `json:"aliasContext,omitempty"`
    RepoID *RepoID `json:"repoId,omitempty"`
    RevisionID *string `json:"revisionId,omitempty"`
    
}

