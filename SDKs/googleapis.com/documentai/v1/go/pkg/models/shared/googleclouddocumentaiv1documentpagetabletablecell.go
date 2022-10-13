package shared

type GoogleCloudDocumentaiV1DocumentPageTableTableCell struct {
	ColSpan           *int32                                                `json:"colSpan"`
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout"`
	RowSpan           *int32                                                `json:"rowSpan"`
}
