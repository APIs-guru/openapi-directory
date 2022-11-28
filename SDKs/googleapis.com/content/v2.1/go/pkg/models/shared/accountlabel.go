package shared

type AccountLabelLabelTypeEnum string

const (
	AccountLabelLabelTypeEnumLabelTypeUnspecified AccountLabelLabelTypeEnum = "LABEL_TYPE_UNSPECIFIED"
	AccountLabelLabelTypeEnumManual               AccountLabelLabelTypeEnum = "MANUAL"
	AccountLabelLabelTypeEnumAutomatic            AccountLabelLabelTypeEnum = "AUTOMATIC"
)

// AccountLabelInput
// Label assigned by CSS domain or CSS group to one of its sub-accounts.
type AccountLabelInput struct {
	AccountID   *string `json:"accountId,omitempty"`
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
}

// AccountLabel
// Label assigned by CSS domain or CSS group to one of its sub-accounts.
type AccountLabel struct {
	AccountID   *string                    `json:"accountId,omitempty"`
	Description *string                    `json:"description,omitempty"`
	LabelID     *string                    `json:"labelId,omitempty"`
	LabelType   *AccountLabelLabelTypeEnum `json:"labelType,omitempty"`
	Name        *string                    `json:"name,omitempty"`
}
