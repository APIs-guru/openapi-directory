package shared

type CustomFieldFieldsTypeEnum string

const (
	CustomFieldFieldsTypeEnumText      CustomFieldFieldsTypeEnum = "text"
	CustomFieldFieldsTypeEnumSelection CustomFieldFieldsTypeEnum = "selection"
	CustomFieldFieldsTypeEnumInput     CustomFieldFieldsTypeEnum = "input"
)

type CustomFieldFields struct {
	ID     *int32                     `json:"id"`
	Label  *string                    `json:"label"`
	Type   *CustomFieldFieldsTypeEnum `json:"type"`
	Values []string                   `json:"values"`
}
