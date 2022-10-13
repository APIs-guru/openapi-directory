package shared

type GoogleCloudVisionV1p2beta1AnnotateFileRequest struct {
	Features     []GoogleCloudVisionV1p2beta1Feature     `json:"features"`
	ImageContext *GoogleCloudVisionV1p2beta1ImageContext `json:"imageContext"`
	InputConfig  *GoogleCloudVisionV1p2beta1InputConfig  `json:"inputConfig"`
	Pages        []int32                                 `json:"pages"`
}
