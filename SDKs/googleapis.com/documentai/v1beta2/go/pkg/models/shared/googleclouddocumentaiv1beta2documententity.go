package shared

type GoogleCloudDocumentaiV1beta2DocumentEntity struct {
	Confidence      *float32                                                   `json:"confidence"`
	ID              *string                                                    `json:"id"`
	MentionID       *string                                                    `json:"mentionId"`
	MentionText     *string                                                    `json:"mentionText"`
	NormalizedValue *GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue `json:"normalizedValue"`
	PageAnchor      *GoogleCloudDocumentaiV1beta2DocumentPageAnchor            `json:"pageAnchor"`
	Properties      []GoogleCloudDocumentaiV1beta2DocumentEntity               `json:"properties"`
	Provenance      *GoogleCloudDocumentaiV1beta2DocumentProvenance            `json:"provenance"`
	Redacted        *bool                                                      `json:"redacted"`
	TextAnchor      *GoogleCloudDocumentaiV1beta2DocumentTextAnchor            `json:"textAnchor"`
	Type            *string                                                    `json:"type"`
}
