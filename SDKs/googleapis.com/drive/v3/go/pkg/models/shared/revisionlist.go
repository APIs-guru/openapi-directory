package shared

type RevisionList struct {
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
	Revisions     []Revision `json:"revisions"`
}
