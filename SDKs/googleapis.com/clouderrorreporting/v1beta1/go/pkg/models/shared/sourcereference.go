package shared

type SourceReference struct {
	Repository *string `json:"repository,omitempty"`
	RevisionID *string `json:"revisionId,omitempty"`
}
