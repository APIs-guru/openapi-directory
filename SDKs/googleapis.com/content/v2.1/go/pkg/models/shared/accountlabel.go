package shared

type AccountLabelLabelTypeEnum string

const (
	AccountLabelLabelTypeEnumLabelTypeUnspecified AccountLabelLabelTypeEnum = "LABEL_TYPE_UNSPECIFIED"
	AccountLabelLabelTypeEnumManual               AccountLabelLabelTypeEnum = "MANUAL"
	AccountLabelLabelTypeEnumAutomatic            AccountLabelLabelTypeEnum = "AUTOMATIC"
)

type AccountLabel struct {
	AccountID   *string                    `json:"accountId"`
	Description *string                    `json:"description"`
	LabelID     *string                    `json:"labelId"`
	LabelType   *AccountLabelLabelTypeEnum `json:"labelType"`
	Name        *string                    `json:"name"`
}
