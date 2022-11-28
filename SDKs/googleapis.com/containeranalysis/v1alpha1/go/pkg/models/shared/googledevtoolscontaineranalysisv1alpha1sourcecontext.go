package shared

// GoogleDevtoolsContaineranalysisV1alpha1SourceContext
// A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
type GoogleDevtoolsContaineranalysisV1alpha1SourceContext struct {
	CloudRepo *GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext `json:"cloudRepo,omitempty"`
	Gerrit    *GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext    `json:"gerrit,omitempty"`
	Git       *GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext       `json:"git,omitempty"`
	Labels    map[string]string                                              `json:"labels,omitempty"`
}
