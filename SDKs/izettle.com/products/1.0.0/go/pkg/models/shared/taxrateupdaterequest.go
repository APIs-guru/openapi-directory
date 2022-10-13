package shared

type TaxRateUpdateRequest struct {
	Default    *bool    `json:"default"`
	Label      *string  `json:"label"`
	Percentage *float64 `json:"percentage"`
}
