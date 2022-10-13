package shared

type GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest struct {
	Features     []GoogleCloudVisionV1p2beta1Feature     `json:"features"`
	ImageContext *GoogleCloudVisionV1p2beta1ImageContext `json:"imageContext"`
	InputConfig  *GoogleCloudVisionV1p2beta1InputConfig  `json:"inputConfig"`
	OutputConfig *GoogleCloudVisionV1p2beta1OutputConfig `json:"outputConfig"`
}
