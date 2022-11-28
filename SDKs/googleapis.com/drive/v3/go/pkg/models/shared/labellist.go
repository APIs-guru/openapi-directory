package shared

// LabelList
// A list of labels.
type LabelList struct {
	Kind          *string `json:"kind,omitempty"`
	Labels        []Label `json:"labels,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
