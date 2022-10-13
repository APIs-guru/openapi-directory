package shared

type GoogleCloudDocumentaiV1beta2DocumentPageTable struct {
	BodyRows          []GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow    `json:"bodyRows"`
	DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"detectedLanguages"`
	HeaderRows        []GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow    `json:"headerRows"`
	Layout            *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"layout"`
}
