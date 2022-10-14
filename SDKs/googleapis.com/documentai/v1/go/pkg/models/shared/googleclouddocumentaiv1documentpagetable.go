package shared

type GoogleCloudDocumentaiV1DocumentPageTable struct {
	BodyRows          []GoogleCloudDocumentaiV1DocumentPageTableTableRow    `json:"bodyRows,omitempty"`
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	HeaderRows        []GoogleCloudDocumentaiV1DocumentPageTableTableRow    `json:"headerRows,omitempty"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout,omitempty"`
}
