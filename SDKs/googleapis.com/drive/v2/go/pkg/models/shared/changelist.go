package shared

// ChangeList
// A list of changes for a user.
type ChangeList struct {
	Etag              *string  `json:"etag,omitempty"`
	Items             []Change `json:"items,omitempty"`
	Kind              *string  `json:"kind,omitempty"`
	LargestChangeID   *string  `json:"largestChangeId,omitempty"`
	NewStartPageToken *string  `json:"newStartPageToken,omitempty"`
	NextLink          *string  `json:"nextLink,omitempty"`
	NextPageToken     *string  `json:"nextPageToken,omitempty"`
	SelfLink          *string  `json:"selfLink,omitempty"`
}
