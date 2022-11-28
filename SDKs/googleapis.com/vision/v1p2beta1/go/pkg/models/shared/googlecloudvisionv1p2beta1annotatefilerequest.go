package shared

// GoogleCloudVisionV1p2beta1AnnotateFileRequest
// A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
type GoogleCloudVisionV1p2beta1AnnotateFileRequest struct {
	Features     []GoogleCloudVisionV1p2beta1Feature     `json:"features,omitempty"`
	ImageContext *GoogleCloudVisionV1p2beta1ImageContext `json:"imageContext,omitempty"`
	InputConfig  *GoogleCloudVisionV1p2beta1InputConfig  `json:"inputConfig,omitempty"`
	Pages        []int32                                 `json:"pages,omitempty"`
}
