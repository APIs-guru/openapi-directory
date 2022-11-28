package shared

// GooglePrivacyDlpV2ImageTransformation
// Configuration for determining how redaction of images should occur.
type GooglePrivacyDlpV2ImageTransformation struct {
	AllInfoTypes      map[string]interface{}               `json:"allInfoTypes,omitempty"`
	AllText           map[string]interface{}               `json:"allText,omitempty"`
	RedactionColor    *GooglePrivacyDlpV2Color             `json:"redactionColor,omitempty"`
	SelectedInfoTypes *GooglePrivacyDlpV2SelectedInfoTypes `json:"selectedInfoTypes,omitempty"`
}
