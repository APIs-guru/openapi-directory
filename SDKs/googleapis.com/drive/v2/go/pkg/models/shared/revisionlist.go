package shared

// RevisionList
// A list of revisions of a file.
type RevisionList struct {
	Etag          *string    `json:"etag,omitempty"`
	Items         []Revision `json:"items,omitempty"`
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	SelfLink      *string    `json:"selfLink,omitempty"`
}
