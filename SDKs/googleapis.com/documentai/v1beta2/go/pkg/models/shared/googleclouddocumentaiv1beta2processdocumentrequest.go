package shared

type GoogleCloudDocumentaiV1beta2ProcessDocumentRequest struct {
	AutomlParams           *GoogleCloudDocumentaiV1beta2AutoMlParams           `json:"automlParams"`
	DocumentType           *string                                             `json:"documentType"`
	EntityExtractionParams *GoogleCloudDocumentaiV1beta2EntityExtractionParams `json:"entityExtractionParams"`
	FormExtractionParams   *GoogleCloudDocumentaiV1beta2FormExtractionParams   `json:"formExtractionParams"`
	InputConfig            *GoogleCloudDocumentaiV1beta2InputConfig            `json:"inputConfig"`
	OcrParams              *GoogleCloudDocumentaiV1beta2OcrParams              `json:"ocrParams"`
	OutputConfig           *GoogleCloudDocumentaiV1beta2OutputConfig           `json:"outputConfig"`
	Parent                 *string                                             `json:"parent"`
	TableExtractionParams  *GoogleCloudDocumentaiV1beta2TableExtractionParams  `json:"tableExtractionParams"`
}
