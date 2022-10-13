package shared

type GerritSourceContext struct {
	AliasContext  *AliasContext `json:"aliasContext"`
	GerritProject *string       `json:"gerritProject"`
	HostURI       *string       `json:"hostUri"`
	RevisionID    *string       `json:"revisionId"`
}
