package shared

type VariantDto struct {
	Barcode       *string          `json:"barcode"`
	CostPrice     *Price           `json:"costPrice"`
	Description   *string          `json:"description"`
	Name          *string          `json:"name"`
	Options       []VariantOption  `json:"options"`
	Presentation  *PresentationDto `json:"presentation"`
	Price         *Price           `json:"price"`
	Sku           *string          `json:"sku"`
	UUID          string           `json:"uuid"`
	VatPercentage *float64         `json:"vatPercentage"`
}
