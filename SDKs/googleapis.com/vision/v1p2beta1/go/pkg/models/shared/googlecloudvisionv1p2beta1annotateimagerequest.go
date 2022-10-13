package shared

type GoogleCloudVisionV1p2beta1AnnotateImageRequest struct {
	Features     []GoogleCloudVisionV1p2beta1Feature     `json:"features"`
	Image        *GoogleCloudVisionV1p2beta1Image        `json:"image"`
	ImageContext *GoogleCloudVisionV1p2beta1ImageContext `json:"imageContext"`
}
