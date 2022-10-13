package shared

type GoogleDevtoolsContaineranalysisV1alpha1SourceContext struct {
	CloudRepo *GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext `json:"cloudRepo"`
	Gerrit    *GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext    `json:"gerrit"`
	Git       *GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext       `json:"git"`
	Labels    map[string]string                                              `json:"labels"`
}
