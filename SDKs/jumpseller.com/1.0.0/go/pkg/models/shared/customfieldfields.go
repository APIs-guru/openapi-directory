package shared

type CustomFieldFieldsTypeEnum string

const (
	CustomFieldFieldsTypeEnumText      CustomFieldFieldsTypeEnum = "text"
	CustomFieldFieldsTypeEnumSelection CustomFieldFieldsTypeEnum = "selection"
	CustomFieldFieldsTypeEnumInput     CustomFieldFieldsTypeEnum = "input"
)

type CustomFieldFields struct {
	ID     *int32                     `json:"id,omitempty"`
	Label  *string                    `json:"label,omitempty"`
	Type   *CustomFieldFieldsTypeEnum `json:"type,omitempty"`
	Values []string                   `json:"values,omitempty"`
}
