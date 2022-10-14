package shared

type GoogleCloudDocumentaiV1DocumentPageTableTableCell struct {
	ColSpan           *int32                                                `json:"colSpan,omitempty"`
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout,omitempty"`
	RowSpan           *int32                                                `json:"rowSpan,omitempty"`
}
