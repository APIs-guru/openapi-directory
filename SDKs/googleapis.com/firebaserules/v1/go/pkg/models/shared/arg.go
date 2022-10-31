package shared

type Arg struct {
	AnyValue   map[string]interface{} `json:"anyValue,omitempty"`
	ExactValue *interface{}           `json:"exactValue,omitempty"`
}
