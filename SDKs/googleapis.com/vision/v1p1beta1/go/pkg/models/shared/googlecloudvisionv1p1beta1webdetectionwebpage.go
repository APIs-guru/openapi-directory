package shared

type GoogleCloudVisionV1p1beta1WebDetectionWebPage struct {
	FullMatchingImages    []GoogleCloudVisionV1p1beta1WebDetectionWebImage `json:"fullMatchingImages"`
	PageTitle             *string                                          `json:"pageTitle"`
	PartialMatchingImages []GoogleCloudVisionV1p1beta1WebDetectionWebImage `json:"partialMatchingImages"`
	Score                 *float32                                         `json:"score"`
	URL                   *string                                          `json:"url"`
}
