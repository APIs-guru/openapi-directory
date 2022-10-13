package shared

type GoogleCloudDocumentaiV1beta3ProcessResponse struct {
	Document             *GoogleCloudDocumentaiV1beta3Document          `json:"document"`
	HumanReviewOperation *string                                        `json:"humanReviewOperation"`
	HumanReviewStatus    *GoogleCloudDocumentaiV1beta3HumanReviewStatus `json:"humanReviewStatus"`
}
