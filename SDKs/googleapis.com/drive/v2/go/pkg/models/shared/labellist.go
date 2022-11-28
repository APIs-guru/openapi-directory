package shared

// LabelList
// A list of labels.
type LabelList struct {
	Items         []Label `json:"items,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
