package shared

type Entity struct {
	Fields map[string]interface{} `json:"fields"`
	Name   *string                `json:"name"`
}
