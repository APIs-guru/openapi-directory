package shared

type VariantFields struct {
	ID             *int32                     `json:"id,omitempty"`
	Image          *ImageFields               `json:"image,omitempty"`
	Options        []ProductOptionVariantEdit `json:"options,omitempty"`
	Price          *float32                   `json:"price,omitempty"`
	Sku            *string                    `json:"sku,omitempty"`
	Stock          *int32                     `json:"stock,omitempty"`
	StockUnlimited *bool                      `json:"stock_unlimited,omitempty"`
}
