package shared

type ImageContext struct {
	CropHintsParams     *CropHintsParams     `json:"cropHintsParams"`
	LanguageHints       []string             `json:"languageHints"`
	LatLongRect         *LatLongRect         `json:"latLongRect"`
	ProductSearchParams *ProductSearchParams `json:"productSearchParams"`
	TextDetectionParams *TextDetectionParams `json:"textDetectionParams"`
	WebDetectionParams  *WebDetectionParams  `json:"webDetectionParams"`
}
