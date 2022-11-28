package shared

// SourceReference
// A reference to a particular snapshot of the source tree used to build and deploy an application.
type SourceReference struct {
	Repository *string `json:"repository,omitempty"`
	RevisionID *string `json:"revisionId,omitempty"`
}
