package shared

type GoogleDevtoolsContaineranalysisV1alpha1SourceContext struct {
	CloudRepo *GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext `json:"cloudRepo,omitempty"`
	Gerrit    *GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext    `json:"gerrit,omitempty"`
	Git       *GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext       `json:"git,omitempty"`
	Labels    map[string]string                                              `json:"labels,omitempty"`
}
