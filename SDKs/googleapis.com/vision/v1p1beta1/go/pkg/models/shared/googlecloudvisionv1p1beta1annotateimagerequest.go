package shared

type GoogleCloudVisionV1p1beta1AnnotateImageRequest struct {
	Features     []GoogleCloudVisionV1p1beta1Feature     `json:"features"`
	Image        *GoogleCloudVisionV1p1beta1Image        `json:"image"`
	ImageContext *GoogleCloudVisionV1p1beta1ImageContext `json:"imageContext"`
}
