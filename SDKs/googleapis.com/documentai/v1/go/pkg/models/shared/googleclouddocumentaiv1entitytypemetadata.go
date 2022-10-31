package shared

type GoogleCloudDocumentaiV1EntityTypeMetadata struct {
	HumanReviewLabelingMetadata *GoogleCloudDocumentaiV1HumanReviewLabelingMetadata   `json:"humanReviewLabelingMetadata,omitempty"`
	HumanReviewMetadata         *GoogleCloudDocumentaiV1HumanReviewValidationMetadata `json:"humanReviewMetadata,omitempty"`
	Inactive                    *bool                                                 `json:"inactive,omitempty"`
}
