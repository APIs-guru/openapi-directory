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

// Document
// Represents the input to API methods.
type Document struct {
	BoilerplateHandling *DocumentBoilerplateHandlingEnum `json:"boilerplateHandling,omitempty"`
	Content             *string                          `json:"content,omitempty"`
	GcsContentURI       *string                          `json:"gcsContentUri,omitempty"`
	Language            *string                          `json:"language,omitempty"`
	ReferenceWebURI     *string                          `json:"referenceWebUri,omitempty"`
	Type                *DocumentTypeEnum                `json:"type,omitempty"`
}
