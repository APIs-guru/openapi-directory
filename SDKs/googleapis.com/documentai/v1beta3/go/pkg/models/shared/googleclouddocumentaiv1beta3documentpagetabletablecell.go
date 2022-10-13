package shared

type GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell struct {
	ColSpan           *int32                                                     `json:"colSpan"`
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"detectedLanguages"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"layout"`
	RowSpan           *int32                                                     `json:"rowSpan"`
}
