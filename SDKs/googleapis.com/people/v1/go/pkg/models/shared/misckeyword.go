package shared




type MiscKeywordTypeEnum string

const (
    MiscKeywordTypeEnumTypeUnspecified MiscKeywordTypeEnum = "TYPE_UNSPECIFIED"
MiscKeywordTypeEnumOutlookBillingInformation MiscKeywordTypeEnum = "OUTLOOK_BILLING_INFORMATION"
MiscKeywordTypeEnumOutlookDirectoryServer MiscKeywordTypeEnum = "OUTLOOK_DIRECTORY_SERVER"
MiscKeywordTypeEnumOutlookKeyword MiscKeywordTypeEnum = "OUTLOOK_KEYWORD"
MiscKeywordTypeEnumOutlookMileage MiscKeywordTypeEnum = "OUTLOOK_MILEAGE"
MiscKeywordTypeEnumOutlookPriority MiscKeywordTypeEnum = "OUTLOOK_PRIORITY"
MiscKeywordTypeEnumOutlookSensitivity MiscKeywordTypeEnum = "OUTLOOK_SENSITIVITY"
MiscKeywordTypeEnumOutlookSubject MiscKeywordTypeEnum = "OUTLOOK_SUBJECT"
MiscKeywordTypeEnumOutlookUser MiscKeywordTypeEnum = "OUTLOOK_USER"
MiscKeywordTypeEnumHome MiscKeywordTypeEnum = "HOME"
MiscKeywordTypeEnumWork MiscKeywordTypeEnum = "WORK"
MiscKeywordTypeEnumOther MiscKeywordTypeEnum = "OTHER"
)


type MiscKeyword struct {
    FormattedType *string `json:"formattedType,omitempty"`
    Metadata *FieldMetadata `json:"metadata,omitempty"`
    Type *MiscKeywordTypeEnum `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

