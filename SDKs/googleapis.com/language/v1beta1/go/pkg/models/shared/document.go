package shared

type DocumentTypeEnum string

const (
	DocumentTypeEnumTypeUnspecified DocumentTypeEnum = "TYPE_UNSPECIFIED"
	DocumentTypeEnumPlainText       DocumentTypeEnum = "PLAIN_TEXT"
	DocumentTypeEnumHTML            DocumentTypeEnum = "HTML"
)

type Document struct {
	Content       *string           `json:"content,omitempty"`
	GcsContentURI *string           `json:"gcsContentUri,omitempty"`
	Language      *string           `json:"language,omitempty"`
	Type          *DocumentTypeEnum `json:"type,omitempty"`
}
