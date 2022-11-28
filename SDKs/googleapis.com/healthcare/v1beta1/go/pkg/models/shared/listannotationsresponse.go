package shared

// ListAnnotationsResponse
// Lists the Annotations in the specified Annotation store.
type ListAnnotationsResponse struct {
	Annotations   []Annotation `json:"annotations,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
