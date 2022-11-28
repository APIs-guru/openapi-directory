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

// SourceInput
// The source of a field.
type SourceInput struct {
	Etag *string         `json:"etag,omitempty"`
	ID   *string         `json:"id,omitempty"`
	Type *SourceTypeEnum `json:"type,omitempty"`
}

// Source
// The source of a field.
type Source struct {
	Etag            *string          `json:"etag,omitempty"`
	ID              *string          `json:"id,omitempty"`
	ProfileMetadata *ProfileMetadata `json:"profileMetadata,omitempty"`
	Type            *SourceTypeEnum  `json:"type,omitempty"`
	UpdateTime      *string          `json:"updateTime,omitempty"`
}
