package shared

type ChangeList struct {
	Changes           []Change `json:"changes,omitempty"`
	Kind              *string  `json:"kind,omitempty"`
	NewStartPageToken *string  `json:"newStartPageToken,omitempty"`
	NextPageToken     *string  `json:"nextPageToken,omitempty"`
}
