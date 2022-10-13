package shared

type DocumentTypeEnum string

const (
	DocumentTypeEnumTypeUnspecified DocumentTypeEnum = "TYPE_UNSPECIFIED"
	DocumentTypeEnumPlainText       DocumentTypeEnum = "PLAIN_TEXT"
	DocumentTypeEnumHTML            DocumentTypeEnum = "HTML"
)

type Document struct {
	Content       *string           `json:"content"`
	GcsContentURI *string           `json:"gcsContentUri"`
	Language      *string           `json:"language"`
	Type          *DocumentTypeEnum `json:"type"`
}
