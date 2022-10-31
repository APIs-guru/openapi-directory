package shared



type GoogleCloudDocumentaiV1beta3ProcessRequest struct {
    Document *GoogleCloudDocumentaiV1beta3Document `json:"document,omitempty"`
    FieldMask *string `json:"fieldMask,omitempty"`
    InlineDocument *GoogleCloudDocumentaiV1beta3Document `json:"inlineDocument,omitempty"`
    RawDocument *GoogleCloudDocumentaiV1beta3RawDocument `json:"rawDocument,omitempty"`
    SkipHumanReview *bool `json:"skipHumanReview,omitempty"`
    
}

