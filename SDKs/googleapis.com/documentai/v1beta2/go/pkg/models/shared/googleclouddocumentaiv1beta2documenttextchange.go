package shared



type GoogleCloudDocumentaiV1beta2DocumentTextChange struct {
    ChangedText *string `json:"changedText,omitempty"`
    Provenance []GoogleCloudDocumentaiV1beta2DocumentProvenance `json:"provenance,omitempty"`
    TextAnchor *GoogleCloudDocumentaiV1beta2DocumentTextAnchor `json:"textAnchor,omitempty"`
    
}

