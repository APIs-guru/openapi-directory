package shared

type Links struct {
	First *string `json:"First,omitempty"`
	Last  *string `json:"Last,omitempty"`
	Next  *string `json:"Next,omitempty"`
	Prev  *string `json:"Prev,omitempty"`
	Self  string  `json:"Self"`
}
