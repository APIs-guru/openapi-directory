package shared



type GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest struct {
    OutputConfig *GoogleCloudVisionV1p1beta1OutputConfig `json:"outputConfig,omitempty"`
    Parent *string `json:"parent,omitempty"`
    Requests []GoogleCloudVisionV1p1beta1AnnotateImageRequest `json:"requests,omitempty"`
    
}

