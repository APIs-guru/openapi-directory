package shared

type GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest struct {
	Features     []GoogleCloudVisionV1p1beta1Feature     `json:"features,omitempty"`
	ImageContext *GoogleCloudVisionV1p1beta1ImageContext `json:"imageContext,omitempty"`
	InputConfig  *GoogleCloudVisionV1p1beta1InputConfig  `json:"inputConfig,omitempty"`
	OutputConfig *GoogleCloudVisionV1p1beta1OutputConfig `json:"outputConfig,omitempty"`
}
