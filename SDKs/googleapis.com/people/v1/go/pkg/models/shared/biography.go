package shared

type BiographyContentTypeEnum string

const (
	BiographyContentTypeEnumContentTypeUnspecified BiographyContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	BiographyContentTypeEnumTextPlain              BiographyContentTypeEnum = "TEXT_PLAIN"
	BiographyContentTypeEnumTextHTML               BiographyContentTypeEnum = "TEXT_HTML"
)

type Biography struct {
	ContentType *BiographyContentTypeEnum `json:"contentType,omitempty"`
	Metadata    *FieldMetadata            `json:"metadata,omitempty"`
	Value       *string                   `json:"value,omitempty"`
}
