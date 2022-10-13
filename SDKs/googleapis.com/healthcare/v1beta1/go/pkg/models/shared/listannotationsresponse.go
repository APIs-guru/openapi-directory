package shared

type ListAnnotationsResponse struct {
	Annotations   []Annotation `json:"annotations"`
	NextPageToken *string      `json:"nextPageToken"`
}
