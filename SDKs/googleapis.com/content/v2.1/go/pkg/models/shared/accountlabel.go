package shared

type AccountLabelLabelTypeEnum string

const (
	AccountLabelLabelTypeEnumLabelTypeUnspecified AccountLabelLabelTypeEnum = "LABEL_TYPE_UNSPECIFIED"
	AccountLabelLabelTypeEnumManual               AccountLabelLabelTypeEnum = "MANUAL"
	AccountLabelLabelTypeEnumAutomatic            AccountLabelLabelTypeEnum = "AUTOMATIC"
)

type AccountLabel struct {
	AccountID   *string                    `json:"accountId,omitempty"`
	Description *string                    `json:"description,omitempty"`
	LabelID     *string                    `json:"labelId,omitempty"`
	LabelType   *AccountLabelLabelTypeEnum `json:"labelType,omitempty"`
	Name        *string                    `json:"name,omitempty"`
}
