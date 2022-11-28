package shared

// RevisionList
// A list of revisions of a file.
type RevisionList struct {
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Revisions     []Revision `json:"revisions,omitempty"`
}
