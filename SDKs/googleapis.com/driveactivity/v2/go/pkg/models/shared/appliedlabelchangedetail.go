package shared

type AppliedLabelChangeDetailTypesEnum string

const (
	AppliedLabelChangeDetailTypesEnumTypeUnspecified          AppliedLabelChangeDetailTypesEnum = "TYPE_UNSPECIFIED"
	AppliedLabelChangeDetailTypesEnumLabelAdded               AppliedLabelChangeDetailTypesEnum = "LABEL_ADDED"
	AppliedLabelChangeDetailTypesEnumLabelRemoved             AppliedLabelChangeDetailTypesEnum = "LABEL_REMOVED"
	AppliedLabelChangeDetailTypesEnumLabelFieldValueChanged   AppliedLabelChangeDetailTypesEnum = "LABEL_FIELD_VALUE_CHANGED"
	AppliedLabelChangeDetailTypesEnumLabelAppliedByItemCreate AppliedLabelChangeDetailTypesEnum = "LABEL_APPLIED_BY_ITEM_CREATE"
)

type AppliedLabelChangeDetail struct {
	FieldChanges []FieldValueChange                  `json:"fieldChanges"`
	Label        *string                             `json:"label"`
	Title        *string                             `json:"title"`
	Types        []AppliedLabelChangeDetailTypesEnum `json:"types"`
}
