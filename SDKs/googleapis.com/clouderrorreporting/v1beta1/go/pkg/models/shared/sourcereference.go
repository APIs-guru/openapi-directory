package shared

type SourceReference struct {
	Repository *string `json:"repository"`
	RevisionID *string `json:"revisionId"`
}
