package shared

type GitSourceContext struct {
	RevisionID *string `json:"revisionId,omitempty"`
	URL        *string `json:"url,omitempty"`
}
