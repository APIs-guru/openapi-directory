package shared

// GoogleSearchIdeahubV1alphaListAvailableLocalesResponse
// Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
type GoogleSearchIdeahubV1alphaListAvailableLocalesResponse struct {
	AvailableLocales []GoogleSearchIdeahubV1alphaAvailableLocale `json:"availableLocales,omitempty"`
	NextPageToken    *string                                     `json:"nextPageToken,omitempty"`
}
