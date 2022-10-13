package shared

type VariantFields struct {
	ID             *int32                     `json:"id"`
	Image          *ImageFields               `json:"image"`
	Options        []ProductOptionVariantEdit `json:"options"`
	Price          *float32                   `json:"price"`
	Sku            *string                    `json:"sku"`
	Stock          *int32                     `json:"stock"`
	StockUnlimited *bool                      `json:"stock_unlimited"`
}
