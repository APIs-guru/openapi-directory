package shared

// GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext
// A SourceContext referring to a Gerrit project.
type GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext struct {
	AliasContext  *GoogleDevtoolsContaineranalysisV1alpha1AliasContext `json:"aliasContext,omitempty"`
	GerritProject *string                                              `json:"gerritProject,omitempty"`
	HostURI       *string                                              `json:"hostUri,omitempty"`
	RevisionID    *string                                              `json:"revisionId,omitempty"`
}
