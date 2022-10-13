package shared

type ProductOptionValueFields struct {
	ID            *int32         `json:"id"`
	Name          *string        `json:"name"`
	Position      *int32         `json:"position"`
	ProductOption *ProductOption `json:"product_option"`
	Variants      []Variant      `json:"variants"`
}
