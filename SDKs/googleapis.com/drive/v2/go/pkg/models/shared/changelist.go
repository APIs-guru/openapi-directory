package shared

type ChangeList struct {
	Etag              *string  `json:"etag"`
	Items             []Change `json:"items"`
	Kind              *string  `json:"kind"`
	LargestChangeID   *string  `json:"largestChangeId"`
	NewStartPageToken *string  `json:"newStartPageToken"`
	NextLink          *string  `json:"nextLink"`
	NextPageToken     *string  `json:"nextPageToken"`
	SelfLink          *string  `json:"selfLink"`
}
