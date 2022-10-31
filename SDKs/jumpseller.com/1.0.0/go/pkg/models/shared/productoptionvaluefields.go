package shared

type ProductOptionValueFields struct {
	ID            *int32         `json:"id,omitempty"`
	Name          *string        `json:"name,omitempty"`
	Position      *int32         `json:"position,omitempty"`
	ProductOption *ProductOption `json:"product_option,omitempty"`
	Variants      []Variant      `json:"variants,omitempty"`
}
