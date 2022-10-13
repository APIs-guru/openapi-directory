package shared

type GoogleSearchIdeahubV1alphaListAvailableLocalesResponse struct {
	AvailableLocales []GoogleSearchIdeahubV1alphaAvailableLocale `json:"availableLocales"`
	NextPageToken    *string                                     `json:"nextPageToken"`
}
