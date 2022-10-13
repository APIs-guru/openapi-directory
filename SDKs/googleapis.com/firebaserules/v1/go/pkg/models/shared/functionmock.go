package shared

type FunctionMock struct {
	Args     []Arg   `json:"args"`
	Function *string `json:"function"`
	Result   *Result `json:"result"`
}
