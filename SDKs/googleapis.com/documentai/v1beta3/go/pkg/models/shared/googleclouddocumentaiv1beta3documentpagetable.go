package shared

type GoogleCloudDocumentaiV1beta3DocumentPageTable struct {
	BodyRows          []GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow    `json:"bodyRows"`
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"detectedLanguages"`
	HeaderRows        []GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow    `json:"headerRows"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"layout"`
}
