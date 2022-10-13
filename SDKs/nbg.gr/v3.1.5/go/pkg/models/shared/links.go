package shared

type Links struct {
	First *string `json:"First"`
	Last  *string `json:"Last"`
	Next  *string `json:"Next"`
	Prev  *string `json:"Prev"`
	Self  string  `json:"Self"`
}
