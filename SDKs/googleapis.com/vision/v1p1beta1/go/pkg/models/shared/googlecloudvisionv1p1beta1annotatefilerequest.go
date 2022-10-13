package shared

type GoogleCloudVisionV1p1beta1AnnotateFileRequest struct {
	Features     []GoogleCloudVisionV1p1beta1Feature     `json:"features"`
	ImageContext *GoogleCloudVisionV1p1beta1ImageContext `json:"imageContext"`
	InputConfig  *GoogleCloudVisionV1p1beta1InputConfig  `json:"inputConfig"`
	Pages        []int32                                 `json:"pages"`
}
