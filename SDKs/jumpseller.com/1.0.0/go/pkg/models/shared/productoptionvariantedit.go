package shared

type ProductOptionVariantEdit struct {
	Name                  *string `json:"name"`
	ProductOptionID       *int32  `json:"product_option_id"`
	ProductOptionPosition *int32  `json:"product_option_position"`
	ProductOptionValueID  *int32  `json:"product_option_value_id"`
	ProductValuePosition  *int32  `json:"product_value_position"`
	Value                 *string `json:"value"`
}
