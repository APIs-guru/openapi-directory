package shared

type ProductOptionFieldsOptionTypeEnum string

const (
	ProductOptionFieldsOptionTypeEnumOption ProductOptionFieldsOptionTypeEnum = "option"
	ProductOptionFieldsOptionTypeEnumInput  ProductOptionFieldsOptionTypeEnum = "input"
	ProductOptionFieldsOptionTypeEnumText   ProductOptionFieldsOptionTypeEnum = "text"
	ProductOptionFieldsOptionTypeEnumFile   ProductOptionFieldsOptionTypeEnum = "file"
)

type ProductOptionFields struct {
	ID         *int32                             `json:"id"`
	Name       *string                            `json:"name"`
	OptionType *ProductOptionFieldsOptionTypeEnum `json:"option_type"`
	Position   *int32                             `json:"position"`
	Values     []ProductOptionValueFields         `json:"values"`
}
