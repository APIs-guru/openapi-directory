package shared

type GoogleCloudVisionV1p2beta1WebDetection struct {
	BestGuessLabels         []GoogleCloudVisionV1p2beta1WebDetectionWebLabel  `json:"bestGuessLabels"`
	FullMatchingImages      []GoogleCloudVisionV1p2beta1WebDetectionWebImage  `json:"fullMatchingImages"`
	PagesWithMatchingImages []GoogleCloudVisionV1p2beta1WebDetectionWebPage   `json:"pagesWithMatchingImages"`
	PartialMatchingImages   []GoogleCloudVisionV1p2beta1WebDetectionWebImage  `json:"partialMatchingImages"`
	VisuallySimilarImages   []GoogleCloudVisionV1p2beta1WebDetectionWebImage  `json:"visuallySimilarImages"`
	WebEntities             []GoogleCloudVisionV1p2beta1WebDetectionWebEntity `json:"webEntities"`
}
