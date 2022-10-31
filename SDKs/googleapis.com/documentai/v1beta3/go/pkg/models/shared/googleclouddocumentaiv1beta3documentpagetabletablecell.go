package shared

type GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell struct {
	ColSpan           *int32                                                     `json:"colSpan,omitempty"`
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"layout,omitempty"`
	RowSpan           *int32                                                     `json:"rowSpan,omitempty"`
}
