package shared



type GoogleCloudVisionV1p1beta1AnnotateFileRequest struct {
    Features []GoogleCloudVisionV1p1beta1Feature `json:"features,omitempty"`
    ImageContext *GoogleCloudVisionV1p1beta1ImageContext `json:"imageContext,omitempty"`
    InputConfig *GoogleCloudVisionV1p1beta1InputConfig `json:"inputConfig,omitempty"`
    Pages []int32 `json:"pages,omitempty"`
    
}

