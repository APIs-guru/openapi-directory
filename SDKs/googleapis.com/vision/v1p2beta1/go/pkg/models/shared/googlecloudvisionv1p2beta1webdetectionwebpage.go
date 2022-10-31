package shared



type GoogleCloudVisionV1p2beta1WebDetectionWebPage struct {
    FullMatchingImages []GoogleCloudVisionV1p2beta1WebDetectionWebImage `json:"fullMatchingImages,omitempty"`
    PageTitle *string `json:"pageTitle,omitempty"`
    PartialMatchingImages []GoogleCloudVisionV1p2beta1WebDetectionWebImage `json:"partialMatchingImages,omitempty"`
    Score *float32 `json:"score,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

