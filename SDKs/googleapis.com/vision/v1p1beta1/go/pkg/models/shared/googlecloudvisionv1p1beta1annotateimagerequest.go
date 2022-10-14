package shared

type GoogleCloudVisionV1p1beta1AnnotateImageRequest struct {
	Features     []GoogleCloudVisionV1p1beta1Feature     `json:"features,omitempty"`
	Image        *GoogleCloudVisionV1p1beta1Image        `json:"image,omitempty"`
	ImageContext *GoogleCloudVisionV1p1beta1ImageContext `json:"imageContext,omitempty"`
}
