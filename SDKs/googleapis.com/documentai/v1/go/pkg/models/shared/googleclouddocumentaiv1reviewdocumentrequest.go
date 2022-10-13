package shared

type GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum string

const (
	GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnumDefault GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum = "DEFAULT"
	GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnumUrgent  GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum = "URGENT"
)

type GoogleCloudDocumentaiV1ReviewDocumentRequest struct {
	DocumentSchema         *GoogleCloudDocumentaiV1DocumentSchema                    `json:"documentSchema"`
	EnableSchemaValidation *bool                                                     `json:"enableSchemaValidation"`
	InlineDocument         *GoogleCloudDocumentaiV1Document                          `json:"inlineDocument"`
	Priority               *GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum `json:"priority"`
}
