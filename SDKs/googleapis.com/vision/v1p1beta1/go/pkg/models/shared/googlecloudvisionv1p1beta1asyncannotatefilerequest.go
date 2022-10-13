package shared

type GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest struct {
	Features     []GoogleCloudVisionV1p1beta1Feature     `json:"features"`
	ImageContext *GoogleCloudVisionV1p1beta1ImageContext `json:"imageContext"`
	InputConfig  *GoogleCloudVisionV1p1beta1InputConfig  `json:"inputConfig"`
	OutputConfig *GoogleCloudVisionV1p1beta1OutputConfig `json:"outputConfig"`
}
