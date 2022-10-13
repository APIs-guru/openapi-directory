package shared

type Arg struct {
	AnyValue   map[string]interface{} `json:"anyValue"`
	ExactValue *interface{}           `json:"exactValue"`
}
