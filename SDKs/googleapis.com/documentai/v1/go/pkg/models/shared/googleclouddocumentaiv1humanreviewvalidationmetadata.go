package shared

type GoogleCloudDocumentaiV1HumanReviewValidationMetadata struct {
	ConfidenceThreshold *float32 `json:"confidenceThreshold,omitempty"`
	EnableValidation    *bool    `json:"enableValidation,omitempty"`
}
