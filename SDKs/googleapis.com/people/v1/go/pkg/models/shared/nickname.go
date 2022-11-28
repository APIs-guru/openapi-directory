package shared

type NicknameTypeEnum string

const (
	NicknameTypeEnumDefault       NicknameTypeEnum = "DEFAULT"
	NicknameTypeEnumMaidenName    NicknameTypeEnum = "MAIDEN_NAME"
	NicknameTypeEnumInitials      NicknameTypeEnum = "INITIALS"
	NicknameTypeEnumGplus         NicknameTypeEnum = "GPLUS"
	NicknameTypeEnumOtherName     NicknameTypeEnum = "OTHER_NAME"
	NicknameTypeEnumAlternateName NicknameTypeEnum = "ALTERNATE_NAME"
	NicknameTypeEnumShortName     NicknameTypeEnum = "SHORT_NAME"
)

// Nickname
// A person's nickname.
type Nickname struct {
	Metadata *FieldMetadata    `json:"metadata,omitempty"`
	Type     *NicknameTypeEnum `json:"type,omitempty"`
	Value    *string           `json:"value,omitempty"`
}

// NicknameInput
// A person's nickname.
type NicknameInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Type     *NicknameTypeEnum   `json:"type,omitempty"`
	Value    *string             `json:"value,omitempty"`
}
