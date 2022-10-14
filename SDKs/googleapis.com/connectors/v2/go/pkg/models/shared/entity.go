package shared

type Entity struct {
	Fields map[string]interface{} `json:"fields,omitempty"`
	Name   *string                `json:"name,omitempty"`
}
