package shared

type TaxFields struct {
	CategoryID *int32   `json:"category_id"`
	Country    *string  `json:"country"`
	Fixed      *bool    `json:"fixed"`
	ID         *int32   `json:"id"`
	Name       *string  `json:"name"`
	Region     *string  `json:"region"`
	Shipping   *bool    `json:"shipping"`
	TaxAmount  *float32 `json:"tax_amount"`
}
