package shared

type TaxRate struct {
	Default    *bool    `json:"default"`
	Label      string   `json:"label"`
	Percentage *float64 `json:"percentage"`
	UUID       string   `json:"uuid"`
}
