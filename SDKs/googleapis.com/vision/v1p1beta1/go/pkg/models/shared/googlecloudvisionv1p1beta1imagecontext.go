package shared

type GoogleCloudVisionV1p1beta1ImageContext struct {
	CropHintsParams     *GoogleCloudVisionV1p1beta1CropHintsParams     `json:"cropHintsParams"`
	LanguageHints       []string                                       `json:"languageHints"`
	LatLongRect         *GoogleCloudVisionV1p1beta1LatLongRect         `json:"latLongRect"`
	ProductSearchParams *GoogleCloudVisionV1p1beta1ProductSearchParams `json:"productSearchParams"`
	TextDetectionParams *GoogleCloudVisionV1p1beta1TextDetectionParams `json:"textDetectionParams"`
	WebDetectionParams  *GoogleCloudVisionV1p1beta1WebDetectionParams  `json:"webDetectionParams"`
}
