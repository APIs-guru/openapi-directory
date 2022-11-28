package shared

// ChangeList
// A list of changes for a user.
type ChangeList struct {
	Changes           []Change `json:"changes,omitempty"`
	Kind              *string  `json:"kind,omitempty"`
	NewStartPageToken *string  `json:"newStartPageToken,omitempty"`
	NextPageToken     *string  `json:"nextPageToken,omitempty"`
}
