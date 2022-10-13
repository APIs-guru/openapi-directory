package shared

type CustomFieldEditFieldsTypeEnum string

const (
	CustomFieldEditFieldsTypeEnumText      CustomFieldEditFieldsTypeEnum = "text"
	CustomFieldEditFieldsTypeEnumSelection CustomFieldEditFieldsTypeEnum = "selection"
	CustomFieldEditFieldsTypeEnumInput     CustomFieldEditFieldsTypeEnum = "input"
)

type CustomFieldEditFields struct {
	Label  *string                        `json:"label"`
	Type   *CustomFieldEditFieldsTypeEnum `json:"type"`
	Values []string                       `json:"values"`
}
