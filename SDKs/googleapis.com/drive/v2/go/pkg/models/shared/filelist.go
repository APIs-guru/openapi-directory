package shared

type FileList struct {
	Etag             *string `json:"etag,omitempty"`
	IncompleteSearch *bool   `json:"incompleteSearch,omitempty"`
	Items            []File  `json:"items,omitempty"`
	Kind             *string `json:"kind,omitempty"`
	NextLink         *string `json:"nextLink,omitempty"`
	NextPageToken    *string `json:"nextPageToken,omitempty"`
	SelfLink         *string `json:"selfLink,omitempty"`
}
