package shared

type GoogleCloudDocumentaiV1beta2DocumentEntity struct {
	Confidence      *float32                                                   `json:"confidence,omitempty"`
	ID              *string                                                    `json:"id,omitempty"`
	MentionID       *string                                                    `json:"mentionId,omitempty"`
	MentionText     *string                                                    `json:"mentionText,omitempty"`
	NormalizedValue *GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue `json:"normalizedValue,omitempty"`
	PageAnchor      *GoogleCloudDocumentaiV1beta2DocumentPageAnchor            `json:"pageAnchor,omitempty"`
	Properties      []GoogleCloudDocumentaiV1beta2DocumentEntity               `json:"properties,omitempty"`
	Provenance      *GoogleCloudDocumentaiV1beta2DocumentProvenance            `json:"provenance,omitempty"`
	Redacted        *bool                                                      `json:"redacted,omitempty"`
	TextAnchor      *GoogleCloudDocumentaiV1beta2DocumentTextAnchor            `json:"textAnchor,omitempty"`
	Type            *string                                                    `json:"type,omitempty"`
}
