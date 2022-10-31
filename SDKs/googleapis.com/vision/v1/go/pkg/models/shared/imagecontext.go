package shared

type ImageContext struct {
	CropHintsParams     *CropHintsParams     `json:"cropHintsParams,omitempty"`
	LanguageHints       []string             `json:"languageHints,omitempty"`
	LatLongRect         *LatLongRect         `json:"latLongRect,omitempty"`
	ProductSearchParams *ProductSearchParams `json:"productSearchParams,omitempty"`
	TextDetectionParams *TextDetectionParams `json:"textDetectionParams,omitempty"`
	WebDetectionParams  *WebDetectionParams  `json:"webDetectionParams,omitempty"`
}
