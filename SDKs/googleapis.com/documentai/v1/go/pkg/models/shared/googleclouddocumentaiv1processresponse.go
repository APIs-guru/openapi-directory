package shared

// GoogleCloudDocumentaiV1ProcessResponse
// Response message for the process document method.
type GoogleCloudDocumentaiV1ProcessResponse struct {
	Document          *GoogleCloudDocumentaiV1Document          `json:"document,omitempty"`
	HumanReviewStatus *GoogleCloudDocumentaiV1HumanReviewStatus `json:"humanReviewStatus,omitempty"`
}
