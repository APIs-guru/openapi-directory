package shared

type FunctionCall struct {
	Args     []interface{} `json:"args"`
	Function *string       `json:"function"`
}
