package shared

type GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext struct {
	AliasContext  *GoogleDevtoolsContaineranalysisV1alpha1AliasContext `json:"aliasContext,omitempty"`
	GerritProject *string                                              `json:"gerritProject,omitempty"`
	HostURI       *string                                              `json:"hostUri,omitempty"`
	RevisionID    *string                                              `json:"revisionId,omitempty"`
}
