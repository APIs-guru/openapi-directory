package shared

type GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell struct {
	ColSpan           *int32                                                     `json:"colSpan"`
	DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"detectedLanguages"`
	Layout            *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"layout"`
	RowSpan           *int32                                                     `json:"rowSpan"`
}
