package shared

type GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum string

const (
	GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnumDefault GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum = "DEFAULT"
	GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnumUrgent  GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum = "URGENT"
)

type GoogleCloudDocumentaiV1beta3ReviewDocumentRequest struct {
	Document               *GoogleCloudDocumentaiV1beta3Document                          `json:"document"`
	DocumentSchema         *GoogleCloudDocumentaiV1beta3DocumentSchema                    `json:"documentSchema"`
	EnableSchemaValidation *bool                                                          `json:"enableSchemaValidation"`
	InlineDocument         *GoogleCloudDocumentaiV1beta3Document                          `json:"inlineDocument"`
	Priority               *GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum `json:"priority"`
}
