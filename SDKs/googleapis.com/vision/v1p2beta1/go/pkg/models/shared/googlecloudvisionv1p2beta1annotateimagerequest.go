package shared

type GoogleCloudVisionV1p2beta1AnnotateImageRequest struct {
	Features     []GoogleCloudVisionV1p2beta1Feature     `json:"features,omitempty"`
	Image        *GoogleCloudVisionV1p2beta1Image        `json:"image,omitempty"`
	ImageContext *GoogleCloudVisionV1p2beta1ImageContext `json:"imageContext,omitempty"`
}
