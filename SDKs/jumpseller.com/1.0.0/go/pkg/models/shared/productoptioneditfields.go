package shared

type ProductOptionEditFieldsOptionTypeEnum string

const (
	ProductOptionEditFieldsOptionTypeEnumOption ProductOptionEditFieldsOptionTypeEnum = "option"
	ProductOptionEditFieldsOptionTypeEnumInput  ProductOptionEditFieldsOptionTypeEnum = "input"
	ProductOptionEditFieldsOptionTypeEnumText   ProductOptionEditFieldsOptionTypeEnum = "text"
	ProductOptionEditFieldsOptionTypeEnumFile   ProductOptionEditFieldsOptionTypeEnum = "file"
)

type ProductOptionEditFields struct {
	Name       *string                                `json:"name,omitempty"`
	OptionType *ProductOptionEditFieldsOptionTypeEnum `json:"option_type,omitempty"`
	Position   *int32                                 `json:"position,omitempty"`
}
