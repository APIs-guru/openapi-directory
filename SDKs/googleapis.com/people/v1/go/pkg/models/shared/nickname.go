package shared




type NicknameTypeEnum string

const (
    NicknameTypeEnumDefault NicknameTypeEnum = "DEFAULT"
NicknameTypeEnumMaidenName NicknameTypeEnum = "MAIDEN_NAME"
NicknameTypeEnumInitials NicknameTypeEnum = "INITIALS"
NicknameTypeEnumGplus NicknameTypeEnum = "GPLUS"
NicknameTypeEnumOtherName NicknameTypeEnum = "OTHER_NAME"
NicknameTypeEnumAlternateName NicknameTypeEnum = "ALTERNATE_NAME"
NicknameTypeEnumShortName NicknameTypeEnum = "SHORT_NAME"
)


type Nickname struct {
    Metadata *FieldMetadata `json:"metadata,omitempty"`
    Type *NicknameTypeEnum `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

