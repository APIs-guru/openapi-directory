package shared

// GoogleCloudDocumentaiV1beta3DocumentEntity
// An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
type GoogleCloudDocumentaiV1beta3DocumentEntity struct {
	Confidence      *float32                                                   `json:"confidence,omitempty"`
	ID              *string                                                    `json:"id,omitempty"`
	MentionID       *string                                                    `json:"mentionId,omitempty"`
	MentionText     *string                                                    `json:"mentionText,omitempty"`
	NormalizedValue *GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue `json:"normalizedValue,omitempty"`
	PageAnchor      *GoogleCloudDocumentaiV1beta3DocumentPageAnchor            `json:"pageAnchor,omitempty"`
	Properties      []GoogleCloudDocumentaiV1beta3DocumentEntity               `json:"properties,omitempty"`
	Provenance      *GoogleCloudDocumentaiV1beta3DocumentProvenance            `json:"provenance,omitempty"`
	Redacted        *bool                                                      `json:"redacted,omitempty"`
	TextAnchor      *GoogleCloudDocumentaiV1beta3DocumentTextAnchor            `json:"textAnchor,omitempty"`
	Type            *string                                                    `json:"type,omitempty"`
}
