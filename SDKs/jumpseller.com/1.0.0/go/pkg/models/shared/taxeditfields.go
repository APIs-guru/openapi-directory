package shared

type TaxEditFields struct {
	CategoryID *int32   `json:"category_id"`
	Country    *string  `json:"country"`
	Fixed      *bool    `json:"fixed"`
	Name       *string  `json:"name"`
	Region     *string  `json:"region"`
	Shipping   *bool    `json:"shipping"`
	Tax        *float32 `json:"tax"`
}
