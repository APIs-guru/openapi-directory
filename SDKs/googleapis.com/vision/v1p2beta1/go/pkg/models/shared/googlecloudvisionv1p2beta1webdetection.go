package shared



type GoogleCloudVisionV1p2beta1WebDetection struct {
    BestGuessLabels []GoogleCloudVisionV1p2beta1WebDetectionWebLabel `json:"bestGuessLabels,omitempty"`
    FullMatchingImages []GoogleCloudVisionV1p2beta1WebDetectionWebImage `json:"fullMatchingImages,omitempty"`
    PagesWithMatchingImages []GoogleCloudVisionV1p2beta1WebDetectionWebPage `json:"pagesWithMatchingImages,omitempty"`
    PartialMatchingImages []GoogleCloudVisionV1p2beta1WebDetectionWebImage `json:"partialMatchingImages,omitempty"`
    VisuallySimilarImages []GoogleCloudVisionV1p2beta1WebDetectionWebImage `json:"visuallySimilarImages,omitempty"`
    WebEntities []GoogleCloudVisionV1p2beta1WebDetectionWebEntity `json:"webEntities,omitempty"`
    
}

