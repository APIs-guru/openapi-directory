package shared

type GoogleCloudVisionV1p2beta1ImageContext struct {
	CropHintsParams     *GoogleCloudVisionV1p2beta1CropHintsParams     `json:"cropHintsParams,omitempty"`
	LanguageHints       []string                                       `json:"languageHints,omitempty"`
	LatLongRect         *GoogleCloudVisionV1p2beta1LatLongRect         `json:"latLongRect,omitempty"`
	ProductSearchParams *GoogleCloudVisionV1p2beta1ProductSearchParams `json:"productSearchParams,omitempty"`
	TextDetectionParams *GoogleCloudVisionV1p2beta1TextDetectionParams `json:"textDetectionParams,omitempty"`
	WebDetectionParams  *GoogleCloudVisionV1p2beta1WebDetectionParams  `json:"webDetectionParams,omitempty"`
}
