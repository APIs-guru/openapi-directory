package shared

// ChildList
// A list of children of a file.
type ChildList struct {
	Etag          *string          `json:"etag,omitempty"`
	Items         []ChildReference `json:"items,omitempty"`
	Kind          *string          `json:"kind,omitempty"`
	NextLink      *string          `json:"nextLink,omitempty"`
	NextPageToken *string          `json:"nextPageToken,omitempty"`
	SelfLink      *string          `json:"selfLink,omitempty"`
}
