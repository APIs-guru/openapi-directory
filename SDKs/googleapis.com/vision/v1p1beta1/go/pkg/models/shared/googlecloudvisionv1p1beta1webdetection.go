package shared

type GoogleCloudVisionV1p1beta1WebDetection struct {
	BestGuessLabels         []GoogleCloudVisionV1p1beta1WebDetectionWebLabel  `json:"bestGuessLabels,omitempty"`
	FullMatchingImages      []GoogleCloudVisionV1p1beta1WebDetectionWebImage  `json:"fullMatchingImages,omitempty"`
	PagesWithMatchingImages []GoogleCloudVisionV1p1beta1WebDetectionWebPage   `json:"pagesWithMatchingImages,omitempty"`
	PartialMatchingImages   []GoogleCloudVisionV1p1beta1WebDetectionWebImage  `json:"partialMatchingImages,omitempty"`
	VisuallySimilarImages   []GoogleCloudVisionV1p1beta1WebDetectionWebImage  `json:"visuallySimilarImages,omitempty"`
	WebEntities             []GoogleCloudVisionV1p1beta1WebDetectionWebEntity `json:"webEntities,omitempty"`
}
