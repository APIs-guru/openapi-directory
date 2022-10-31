package shared



type GoogleCloudDocumentaiV1beta2DocumentPageTable struct {
    BodyRows []GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow `json:"bodyRows,omitempty"`
    DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
    HeaderRows []GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow `json:"headerRows,omitempty"`
    Layout *GoogleCloudDocumentaiV1beta2DocumentPageLayout `json:"layout,omitempty"`
    
}

