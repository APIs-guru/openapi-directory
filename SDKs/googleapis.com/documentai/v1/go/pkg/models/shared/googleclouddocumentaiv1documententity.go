package shared

// GoogleCloudDocumentaiV1DocumentEntity
// An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
type GoogleCloudDocumentaiV1DocumentEntity struct {
	Confidence      *float32                                              `json:"confidence,omitempty"`
	ID              *string                                               `json:"id,omitempty"`
	MentionID       *string                                               `json:"mentionId,omitempty"`
	MentionText     *string                                               `json:"mentionText,omitempty"`
	NormalizedValue *GoogleCloudDocumentaiV1DocumentEntityNormalizedValue `json:"normalizedValue,omitempty"`
	PageAnchor      *GoogleCloudDocumentaiV1DocumentPageAnchor            `json:"pageAnchor,omitempty"`
	Properties      []GoogleCloudDocumentaiV1DocumentEntity               `json:"properties,omitempty"`
	Provenance      *GoogleCloudDocumentaiV1DocumentProvenance            `json:"provenance,omitempty"`
	Redacted        *bool                                                 `json:"redacted,omitempty"`
	TextAnchor      *GoogleCloudDocumentaiV1DocumentTextAnchor            `json:"textAnchor,omitempty"`
	Type            *string                                               `json:"type,omitempty"`
}
