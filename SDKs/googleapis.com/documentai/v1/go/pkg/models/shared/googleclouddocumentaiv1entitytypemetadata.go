package shared

type GoogleCloudDocumentaiV1EntityTypeMetadata struct {
	HumanReviewLabelingMetadata *GoogleCloudDocumentaiV1HumanReviewLabelingMetadata   `json:"humanReviewLabelingMetadata"`
	HumanReviewMetadata         *GoogleCloudDocumentaiV1HumanReviewValidationMetadata `json:"humanReviewMetadata"`
	Inactive                    *bool                                                 `json:"inactive"`
}
