package shared

type GoogleSearchIdeahubV1alphaListAvailableLocalesResponse struct {
	AvailableLocales []GoogleSearchIdeahubV1alphaAvailableLocale `json:"availableLocales,omitempty"`
	NextPageToken    *string                                     `json:"nextPageToken,omitempty"`
}
