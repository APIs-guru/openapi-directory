package shared

type GerritSourceContext struct {
	AliasContext  *AliasContext `json:"aliasContext"`
	AliasName     *string       `json:"aliasName"`
	GerritProject *string       `json:"gerritProject"`
	HostURI       *string       `json:"hostUri"`
	RevisionID    *string       `json:"revisionId"`
}
