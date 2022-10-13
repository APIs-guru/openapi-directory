package shared

type ChildList struct {
	Etag          *string          `json:"etag"`
	Items         []ChildReference `json:"items"`
	Kind          *string          `json:"kind"`
	NextLink      *string          `json:"nextLink"`
	NextPageToken *string          `json:"nextPageToken"`
	SelfLink      *string          `json:"selfLink"`
}
