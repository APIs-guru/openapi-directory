package shared

// GoogleCloudDocumentaiV1beta2ProcessDocumentRequest
// Request to process one document.
type GoogleCloudDocumentaiV1beta2ProcessDocumentRequest struct {
	AutomlParams           *GoogleCloudDocumentaiV1beta2AutoMlParams           `json:"automlParams,omitempty"`
	DocumentType           *string                                             `json:"documentType,omitempty"`
	EntityExtractionParams *GoogleCloudDocumentaiV1beta2EntityExtractionParams `json:"entityExtractionParams,omitempty"`
	FormExtractionParams   *GoogleCloudDocumentaiV1beta2FormExtractionParams   `json:"formExtractionParams,omitempty"`
	InputConfig            *GoogleCloudDocumentaiV1beta2InputConfig            `json:"inputConfig,omitempty"`
	OcrParams              *GoogleCloudDocumentaiV1beta2OcrParams              `json:"ocrParams,omitempty"`
	OutputConfig           *GoogleCloudDocumentaiV1beta2OutputConfig           `json:"outputConfig,omitempty"`
	Parent                 *string                                             `json:"parent,omitempty"`
	TableExtractionParams  *GoogleCloudDocumentaiV1beta2TableExtractionParams  `json:"tableExtractionParams,omitempty"`
}
