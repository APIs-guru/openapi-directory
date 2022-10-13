package shared

type GooglePrivacyDlpV2ImageTransformation struct {
	AllInfoTypes      map[string]interface{}               `json:"allInfoTypes"`
	AllText           map[string]interface{}               `json:"allText"`
	RedactionColor    *GooglePrivacyDlpV2Color             `json:"redactionColor"`
	SelectedInfoTypes *GooglePrivacyDlpV2SelectedInfoTypes `json:"selectedInfoTypes"`
}
