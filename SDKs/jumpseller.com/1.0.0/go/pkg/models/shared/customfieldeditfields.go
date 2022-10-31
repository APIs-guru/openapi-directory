package shared

type CustomFieldEditFieldsTypeEnum string

const (
	CustomFieldEditFieldsTypeEnumText      CustomFieldEditFieldsTypeEnum = "text"
	CustomFieldEditFieldsTypeEnumSelection CustomFieldEditFieldsTypeEnum = "selection"
	CustomFieldEditFieldsTypeEnumInput     CustomFieldEditFieldsTypeEnum = "input"
)

type CustomFieldEditFields struct {
	Label  *string                        `json:"label,omitempty"`
	Type   *CustomFieldEditFieldsTypeEnum `json:"type,omitempty"`
	Values []string                       `json:"values,omitempty"`
}
