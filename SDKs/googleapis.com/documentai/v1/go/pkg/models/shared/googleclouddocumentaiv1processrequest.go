package shared

type GoogleCloudDocumentaiV1ProcessRequest struct {
	FieldMask       *string                             `json:"fieldMask"`
	InlineDocument  *GoogleCloudDocumentaiV1Document    `json:"inlineDocument"`
	RawDocument     *GoogleCloudDocumentaiV1RawDocument `json:"rawDocument"`
	SkipHumanReview *bool                               `json:"skipHumanReview"`
}
