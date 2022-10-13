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

type Nickname struct {
	Metadata *FieldMetadata    `json:"metadata"`
	Type     *NicknameTypeEnum `json:"type"`
	Value    *string           `json:"value"`
}
