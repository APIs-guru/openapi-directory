package shared

// GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext
// A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).
type GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext struct {
	RevisionID *string `json:"revisionId,omitempty"`
	URL        *string `json:"url,omitempty"`
}
