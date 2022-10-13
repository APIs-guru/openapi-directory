package shared

type PeopleFeed struct {
	Etag          *string  `json:"etag"`
	Items         []Person `json:"items"`
	Kind          *string  `json:"kind"`
	NextPageToken *string  `json:"nextPageToken"`
	SelfLink      *string  `json:"selfLink"`
	Title         *string  `json:"title"`
	TotalItems    *int32   `json:"totalItems"`
}
