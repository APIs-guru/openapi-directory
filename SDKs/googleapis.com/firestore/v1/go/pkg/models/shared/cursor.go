package shared

type Cursor struct {
	Before *bool   `json:"before"`
	Values []Value `json:"values"`
}
