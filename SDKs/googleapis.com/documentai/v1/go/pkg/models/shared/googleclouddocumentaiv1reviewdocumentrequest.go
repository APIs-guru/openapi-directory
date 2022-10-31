package shared




type GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum string

const (
    GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnumDefault GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum = "DEFAULT"
GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnumUrgent GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum = "URGENT"
)


type GoogleCloudDocumentaiV1ReviewDocumentRequest struct {
    DocumentSchema *GoogleCloudDocumentaiV1DocumentSchema `json:"documentSchema,omitempty"`
    EnableSchemaValidation *bool `json:"enableSchemaValidation,omitempty"`
    InlineDocument *GoogleCloudDocumentaiV1Document `json:"inlineDocument,omitempty"`
    Priority *GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum `json:"priority,omitempty"`
    
}

