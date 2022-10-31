package shared



type GoogleCloudDocumentaiV1beta3DocumentEntity struct {
    Confidence *float32 `json:"confidence,omitempty"`
    ID *string `json:"id,omitempty"`
    MentionID *string `json:"mentionId,omitempty"`
    MentionText *string `json:"mentionText,omitempty"`
    NormalizedValue *GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue `json:"normalizedValue,omitempty"`
    PageAnchor *GoogleCloudDocumentaiV1beta3DocumentPageAnchor `json:"pageAnchor,omitempty"`
    Properties []GoogleCloudDocumentaiV1beta3DocumentEntity `json:"properties,omitempty"`
    Provenance *GoogleCloudDocumentaiV1beta3DocumentProvenance `json:"provenance,omitempty"`
    Redacted *bool `json:"redacted,omitempty"`
    TextAnchor *GoogleCloudDocumentaiV1beta3DocumentTextAnchor `json:"textAnchor,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

