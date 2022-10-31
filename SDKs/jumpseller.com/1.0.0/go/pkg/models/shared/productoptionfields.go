package shared




type ProductOptionFieldsOptionTypeEnum string

const (
    ProductOptionFieldsOptionTypeEnumOption ProductOptionFieldsOptionTypeEnum = "option"
ProductOptionFieldsOptionTypeEnumInput ProductOptionFieldsOptionTypeEnum = "input"
ProductOptionFieldsOptionTypeEnumText ProductOptionFieldsOptionTypeEnum = "text"
ProductOptionFieldsOptionTypeEnumFile ProductOptionFieldsOptionTypeEnum = "file"
)


type ProductOptionFields struct {
    ID *int32 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    OptionType *ProductOptionFieldsOptionTypeEnum `json:"option_type,omitempty"`
    Position *int32 `json:"position,omitempty"`
    Values []ProductOptionValueFields `json:"values,omitempty"`
    
}

