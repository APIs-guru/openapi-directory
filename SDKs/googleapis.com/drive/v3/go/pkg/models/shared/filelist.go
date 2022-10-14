package shared

type FileList struct {
	Files            []File  `json:"files,omitempty"`
	IncompleteSearch *bool   `json:"incompleteSearch,omitempty"`
	Kind             *string `json:"kind,omitempty"`
	NextPageToken    *string `json:"nextPageToken,omitempty"`
}
