package shared

type DetectLanguageResponse struct {
	Languages []DetectedLanguage `json:"languages"`
}
