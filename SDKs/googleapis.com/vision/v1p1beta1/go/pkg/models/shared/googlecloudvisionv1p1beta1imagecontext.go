package shared

type GoogleCloudVisionV1p1beta1ImageContext struct {
	CropHintsParams     *GoogleCloudVisionV1p1beta1CropHintsParams     `json:"cropHintsParams,omitempty"`
	LanguageHints       []string                                       `json:"languageHints,omitempty"`
	LatLongRect         *GoogleCloudVisionV1p1beta1LatLongRect         `json:"latLongRect,omitempty"`
	ProductSearchParams *GoogleCloudVisionV1p1beta1ProductSearchParams `json:"productSearchParams,omitempty"`
	TextDetectionParams *GoogleCloudVisionV1p1beta1TextDetectionParams `json:"textDetectionParams,omitempty"`
	WebDetectionParams  *GoogleCloudVisionV1p1beta1WebDetectionParams  `json:"webDetectionParams,omitempty"`
}
