package shared

type GoogleSearchIdeahubV1betaListAvailableLocalesResponse struct {
	AvailableLocales []GoogleSearchIdeahubV1betaAvailableLocale `json:"availableLocales"`
	NextPageToken    *string                                    `json:"nextPageToken"`
}
