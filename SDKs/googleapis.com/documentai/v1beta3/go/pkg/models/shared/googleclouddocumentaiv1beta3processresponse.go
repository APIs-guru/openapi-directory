package shared

type GoogleCloudDocumentaiV1beta3ProcessResponse struct {
	Document             *GoogleCloudDocumentaiV1beta3Document          `json:"document,omitempty"`
	HumanReviewOperation *string                                        `json:"humanReviewOperation,omitempty"`
	HumanReviewStatus    *GoogleCloudDocumentaiV1beta3HumanReviewStatus `json:"humanReviewStatus,omitempty"`
}
