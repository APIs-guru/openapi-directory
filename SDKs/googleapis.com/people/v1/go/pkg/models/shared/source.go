package shared

type SourceTypeEnum string

const (
	SourceTypeEnumSourceTypeUnspecified SourceTypeEnum = "SOURCE_TYPE_UNSPECIFIED"
	SourceTypeEnumAccount               SourceTypeEnum = "ACCOUNT"
	SourceTypeEnumProfile               SourceTypeEnum = "PROFILE"
	SourceTypeEnumDomainProfile         SourceTypeEnum = "DOMAIN_PROFILE"
	SourceTypeEnumContact               SourceTypeEnum = "CONTACT"
	SourceTypeEnumOtherContact          SourceTypeEnum = "OTHER_CONTACT"
	SourceTypeEnumDomainContact         SourceTypeEnum = "DOMAIN_CONTACT"
)

type Source struct {
	Etag            *string          `json:"etag"`
	ID              *string          `json:"id"`
	ProfileMetadata *ProfileMetadata `json:"profileMetadata"`
	Type            *SourceTypeEnum  `json:"type"`
	UpdateTime      *string          `json:"updateTime"`
}
