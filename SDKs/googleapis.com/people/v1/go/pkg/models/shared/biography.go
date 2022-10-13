package shared

type BiographyContentTypeEnum string

const (
	BiographyContentTypeEnumContentTypeUnspecified BiographyContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	BiographyContentTypeEnumTextPlain              BiographyContentTypeEnum = "TEXT_PLAIN"
	BiographyContentTypeEnumTextHTML               BiographyContentTypeEnum = "TEXT_HTML"
)

type Biography struct {
	ContentType *BiographyContentTypeEnum `json:"contentType"`
	Metadata    *FieldMetadata            `json:"metadata"`
	Value       *string                   `json:"value"`
}
