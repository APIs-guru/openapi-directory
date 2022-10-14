package shared

type PeopleFeed struct {
	Etag          *string  `json:"etag,omitempty"`
	Items         []Person `json:"items,omitempty"`
	Kind          *string  `json:"kind,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	SelfLink      *string  `json:"selfLink,omitempty"`
	Title         *string  `json:"title,omitempty"`
	TotalItems    *int32   `json:"totalItems,omitempty"`
}
