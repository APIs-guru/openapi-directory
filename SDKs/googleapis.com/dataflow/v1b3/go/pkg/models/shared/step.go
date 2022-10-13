package shared

type Step struct {
	Kind       *string                `json:"kind"`
	Name       *string                `json:"name"`
	Properties map[string]interface{} `json:"properties"`
}
