package shared

type Service struct {
	Annotations map[string]string `json:"annotations"`
	Endpoints   []Endpoint        `json:"endpoints"`
	Name        *string           `json:"name"`
}
