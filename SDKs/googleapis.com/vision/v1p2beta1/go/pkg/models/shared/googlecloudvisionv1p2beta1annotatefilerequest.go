package shared



type GoogleCloudVisionV1p2beta1AnnotateFileRequest struct {
    Features []GoogleCloudVisionV1p2beta1Feature `json:"features,omitempty"`
    ImageContext *GoogleCloudVisionV1p2beta1ImageContext `json:"imageContext,omitempty"`
    InputConfig *GoogleCloudVisionV1p2beta1InputConfig `json:"inputConfig,omitempty"`
    Pages []int32 `json:"pages,omitempty"`
    
}

