package shared

type GoogleCloudDocumentaiV1beta3DocumentEntity struct {
	Confidence      *float32                                                   `json:"confidence"`
	ID              *string                                                    `json:"id"`
	MentionID       *string                                                    `json:"mentionId"`
	MentionText     *string                                                    `json:"mentionText"`
	NormalizedValue *GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue `json:"normalizedValue"`
	PageAnchor      *GoogleCloudDocumentaiV1beta3DocumentPageAnchor            `json:"pageAnchor"`
	Properties      []GoogleCloudDocumentaiV1beta3DocumentEntity               `json:"properties"`
	Provenance      *GoogleCloudDocumentaiV1beta3DocumentProvenance            `json:"provenance"`
	Redacted        *bool                                                      `json:"redacted"`
	TextAnchor      *GoogleCloudDocumentaiV1beta3DocumentTextAnchor            `json:"textAnchor"`
	Type            *string                                                    `json:"type"`
}
