package shared

type Option struct {
	Name  *string                `json:"name"`
	Value map[string]interface{} `json:"value"`
}
