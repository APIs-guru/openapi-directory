package shared

type BiographyContentTypeEnum string

const (
	BiographyContentTypeEnumContentTypeUnspecified BiographyContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	BiographyContentTypeEnumTextPlain              BiographyContentTypeEnum = "TEXT_PLAIN"
	BiographyContentTypeEnumTextHTML               BiographyContentTypeEnum = "TEXT_HTML"
)

// Biography
// A person's short biography.
type Biography struct {
	ContentType *BiographyContentTypeEnum `json:"contentType,omitempty"`
	Metadata    *FieldMetadata            `json:"metadata,omitempty"`
	Value       *string                   `json:"value,omitempty"`
}

// BiographyInput
// A person's short biography.
type BiographyInput struct {
	ContentType *BiographyContentTypeEnum `json:"contentType,omitempty"`
	Metadata    *FieldMetadataInput       `json:"metadata,omitempty"`
	Value       *string                   `json:"value,omitempty"`
}
