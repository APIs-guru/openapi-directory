package shared

// AnnotationStore
// An Annotation store that can store annotation resources such as labels and tags for text, image and audio.
type AnnotationStore struct {
	Labels map[string]string `json:"labels,omitempty"`
	Name   *string           `json:"name,omitempty"`
}
