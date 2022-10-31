package shared

type GoogleCloudDocumentaiV1beta3DocumentPageTable struct {
	BodyRows          []GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow    `json:"bodyRows,omitempty"`
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	HeaderRows        []GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow    `json:"headerRows,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"layout,omitempty"`
}
