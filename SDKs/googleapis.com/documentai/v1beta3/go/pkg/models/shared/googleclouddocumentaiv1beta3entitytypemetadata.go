package shared

type GoogleCloudDocumentaiV1beta3EntityTypeMetadata struct {
	HumanReviewLabelingMetadata *GoogleCloudDocumentaiV1beta3HumanReviewLabelingMetadata   `json:"humanReviewLabelingMetadata,omitempty"`
	HumanReviewMetadata         *GoogleCloudDocumentaiV1beta3HumanReviewValidationMetadata `json:"humanReviewMetadata,omitempty"`
	Inactive                    *bool                                                      `json:"inactive,omitempty"`
}
