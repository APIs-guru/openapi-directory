package shared

type AnnotationStore struct {
	Labels map[string]string `json:"labels"`
	Name   *string           `json:"name"`
}
