package shared

// GitSourceContext
// A GitSourceContext denotes a particular revision in a third party Git repository (e.g. GitHub).
type GitSourceContext struct {
	RevisionID *string `json:"revisionId,omitempty"`
	URL        *string `json:"url,omitempty"`
}
