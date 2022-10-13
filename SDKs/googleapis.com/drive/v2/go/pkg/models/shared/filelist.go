package shared

type FileList struct {
	Etag             *string `json:"etag"`
	IncompleteSearch *bool   `json:"incompleteSearch"`
	Items            []File  `json:"items"`
	Kind             *string `json:"kind"`
	NextLink         *string `json:"nextLink"`
	NextPageToken    *string `json:"nextPageToken"`
	SelfLink         *string `json:"selfLink"`
}
