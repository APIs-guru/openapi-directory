package shared

// GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest
// An offline file annotation request.
type GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest struct {
	Features     []GoogleCloudVisionV1p2beta1Feature     `json:"features,omitempty"`
	ImageContext *GoogleCloudVisionV1p2beta1ImageContext `json:"imageContext,omitempty"`
	InputConfig  *GoogleCloudVisionV1p2beta1InputConfig  `json:"inputConfig,omitempty"`
	OutputConfig *GoogleCloudVisionV1p2beta1OutputConfig `json:"outputConfig,omitempty"`
}
