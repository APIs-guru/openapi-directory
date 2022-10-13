package shared

type GoogleCloudVisionV1p2beta1ImageContext struct {
	CropHintsParams     *GoogleCloudVisionV1p2beta1CropHintsParams     `json:"cropHintsParams"`
	LanguageHints       []string                                       `json:"languageHints"`
	LatLongRect         *GoogleCloudVisionV1p2beta1LatLongRect         `json:"latLongRect"`
	ProductSearchParams *GoogleCloudVisionV1p2beta1ProductSearchParams `json:"productSearchParams"`
	TextDetectionParams *GoogleCloudVisionV1p2beta1TextDetectionParams `json:"textDetectionParams"`
	WebDetectionParams  *GoogleCloudVisionV1p2beta1WebDetectionParams  `json:"webDetectionParams"`
}
