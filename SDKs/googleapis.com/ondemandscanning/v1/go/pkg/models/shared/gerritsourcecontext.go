package shared

// GerritSourceContext
// A SourceContext referring to a Gerrit project.
type GerritSourceContext struct {
	AliasContext  *AliasContext `json:"aliasContext,omitempty"`
	GerritProject *string       `json:"gerritProject,omitempty"`
	HostURI       *string       `json:"hostUri,omitempty"`
	RevisionID    *string       `json:"revisionId,omitempty"`
}
