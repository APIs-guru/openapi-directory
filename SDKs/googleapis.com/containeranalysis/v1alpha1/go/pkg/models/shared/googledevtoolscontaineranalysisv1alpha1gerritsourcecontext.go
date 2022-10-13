package shared

type GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext struct {
	AliasContext  *GoogleDevtoolsContaineranalysisV1alpha1AliasContext `json:"aliasContext"`
	GerritProject *string                                              `json:"gerritProject"`
	HostURI       *string                                              `json:"hostUri"`
	RevisionID    *string                                              `json:"revisionId"`
}
