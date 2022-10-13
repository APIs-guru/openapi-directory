package shared

type GoogleCloudDocumentaiV1beta3ProcessRequest struct {
	Document        *GoogleCloudDocumentaiV1beta3Document    `json:"document"`
	FieldMask       *string                                  `json:"fieldMask"`
	InlineDocument  *GoogleCloudDocumentaiV1beta3Document    `json:"inlineDocument"`
	RawDocument     *GoogleCloudDocumentaiV1beta3RawDocument `json:"rawDocument"`
	SkipHumanReview *bool                                    `json:"skipHumanReview"`
}
