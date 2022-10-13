package shared

type DocumentBoilerplateHandlingEnum string

const (
	DocumentBoilerplateHandlingEnumBoilerplateHandlingUnspecified DocumentBoilerplateHandlingEnum = "BOILERPLATE_HANDLING_UNSPECIFIED"
	DocumentBoilerplateHandlingEnumSkipBoilerplate                DocumentBoilerplateHandlingEnum = "SKIP_BOILERPLATE"
	DocumentBoilerplateHandlingEnumKeepBoilerplate                DocumentBoilerplateHandlingEnum = "KEEP_BOILERPLATE"
)

type DocumentTypeEnum string

const (
	DocumentTypeEnumTypeUnspecified DocumentTypeEnum = "TYPE_UNSPECIFIED"
	DocumentTypeEnumPlainText       DocumentTypeEnum = "PLAIN_TEXT"
	DocumentTypeEnumHTML            DocumentTypeEnum = "HTML"
)

type Document struct {
	BoilerplateHandling *DocumentBoilerplateHandlingEnum `json:"boilerplateHandling"`
	Content             *string                          `json:"content"`
	GcsContentURI       *string                          `json:"gcsContentUri"`
	Language            *string                          `json:"language"`
	ReferenceWebURI     *string                          `json:"referenceWebUri"`
	Type                *DocumentTypeEnum                `json:"type"`
}
