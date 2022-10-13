package shared

type GoogleCloudDocumentaiV1beta3PropertyMetadata struct {
	HumanReviewLabelingMetadata *GoogleCloudDocumentaiV1beta3HumanReviewLabelingMetadata   `json:"humanReviewLabelingMetadata"`
	HumanReviewMetadata         *GoogleCloudDocumentaiV1beta3HumanReviewValidationMetadata `json:"humanReviewMetadata"`
	Inactive                    *bool                                                      `json:"inactive"`
}
