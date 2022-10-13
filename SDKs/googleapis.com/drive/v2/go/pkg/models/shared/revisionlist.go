package shared

type RevisionList struct {
	Etag          *string    `json:"etag"`
	Items         []Revision `json:"items"`
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
	SelfLink      *string    `json:"selfLink"`
}
