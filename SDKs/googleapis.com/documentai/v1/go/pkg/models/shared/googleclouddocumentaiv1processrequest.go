package shared

type GoogleCloudDocumentaiV1ProcessRequest struct {
	FieldMask       *string                             `json:"fieldMask,omitempty"`
	InlineDocument  *GoogleCloudDocumentaiV1Document    `json:"inlineDocument,omitempty"`
	RawDocument     *GoogleCloudDocumentaiV1RawDocument `json:"rawDocument,omitempty"`
	SkipHumanReview *bool                               `json:"skipHumanReview,omitempty"`
}
