package shared

type VariantEditFields struct {
	ImageID        *int32                     `json:"image_id"`
	Options        []ProductOptionVariantEdit `json:"options"`
	Price          *float32                   `json:"price"`
	Sku            *string                    `json:"sku"`
	Stock          *int32                     `json:"stock"`
	StockUnlimited *bool                      `json:"stock_unlimited"`
}
