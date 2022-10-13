package shared

type Result struct {
	Undefined map[string]interface{} `json:"undefined"`
	Value     *interface{}           `json:"value"`
}
