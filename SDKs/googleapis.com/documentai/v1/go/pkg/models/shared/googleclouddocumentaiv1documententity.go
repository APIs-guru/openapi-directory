package shared

type GoogleCloudDocumentaiV1DocumentEntity struct {
	Confidence      *float32                                              `json:"confidence"`
	ID              *string                                               `json:"id"`
	MentionID       *string                                               `json:"mentionId"`
	MentionText     *string                                               `json:"mentionText"`
	NormalizedValue *GoogleCloudDocumentaiV1DocumentEntityNormalizedValue `json:"normalizedValue"`
	PageAnchor      *GoogleCloudDocumentaiV1DocumentPageAnchor            `json:"pageAnchor"`
	Properties      []GoogleCloudDocumentaiV1DocumentEntity               `json:"properties"`
	Provenance      *GoogleCloudDocumentaiV1DocumentProvenance            `json:"provenance"`
	Redacted        *bool                                                 `json:"redacted"`
	TextAnchor      *GoogleCloudDocumentaiV1DocumentTextAnchor            `json:"textAnchor"`
	Type            *string                                               `json:"type"`
}
