package shared

type Namespace struct {
	Labels map[string]string `json:"labels"`
	Name   *string           `json:"name"`
}
