package shared



type GoogleCloudDocumentaiV1DocumentPageBlock struct {
    DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
    Layout *GoogleCloudDocumentaiV1DocumentPageLayout `json:"layout,omitempty"`
    Provenance *GoogleCloudDocumentaiV1DocumentProvenance `json:"provenance,omitempty"`
    
}

