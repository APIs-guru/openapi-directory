package shared

type GoogleCloudVisionV1p1beta1WebDetection struct {
	BestGuessLabels         []GoogleCloudVisionV1p1beta1WebDetectionWebLabel  `json:"bestGuessLabels"`
	FullMatchingImages      []GoogleCloudVisionV1p1beta1WebDetectionWebImage  `json:"fullMatchingImages"`
	PagesWithMatchingImages []GoogleCloudVisionV1p1beta1WebDetectionWebPage   `json:"pagesWithMatchingImages"`
	PartialMatchingImages   []GoogleCloudVisionV1p1beta1WebDetectionWebImage  `json:"partialMatchingImages"`
	VisuallySimilarImages   []GoogleCloudVisionV1p1beta1WebDetectionWebImage  `json:"visuallySimilarImages"`
	WebEntities             []GoogleCloudVisionV1p1beta1WebDetectionWebEntity `json:"webEntities"`
}
