package shared

type GoogleCloudDocumentaiV1PropertyMetadata struct {
	HumanReviewLabelingMetadata *GoogleCloudDocumentaiV1HumanReviewLabelingMetadata   `json:"humanReviewLabelingMetadata"`
	HumanReviewMetadata         *GoogleCloudDocumentaiV1HumanReviewValidationMetadata `json:"humanReviewMetadata"`
	Inactive                    *bool                                                 `json:"inactive"`
}
