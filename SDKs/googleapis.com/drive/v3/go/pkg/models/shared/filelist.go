package shared

type FileList struct {
	Files            []File  `json:"files"`
	IncompleteSearch *bool   `json:"incompleteSearch"`
	Kind             *string `json:"kind"`
	NextPageToken    *string `json:"nextPageToken"`
}
