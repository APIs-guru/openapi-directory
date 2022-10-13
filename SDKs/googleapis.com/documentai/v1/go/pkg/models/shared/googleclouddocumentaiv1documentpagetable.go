package shared

type GoogleCloudDocumentaiV1DocumentPageTable struct {
	BodyRows          []GoogleCloudDocumentaiV1DocumentPageTableTableRow    `json:"bodyRows"`
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages"`
	HeaderRows        []GoogleCloudDocumentaiV1DocumentPageTableTableRow    `json:"headerRows"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout"`
}
