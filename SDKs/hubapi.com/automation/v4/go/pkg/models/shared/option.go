package shared

type Option struct {
	Description  string  `json:"description"`
	DisplayOrder int32   `json:"displayOrder"`
	DoubleData   float64 `json:"doubleData"`
	Hidden       bool    `json:"hidden"`
	Label        string  `json:"label"`
	ReadOnly     bool    `json:"readOnly"`
	Value        string  `json:"value"`
}
