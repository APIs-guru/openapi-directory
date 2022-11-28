package shared

// GoogleSearchIdeahubV1betaListAvailableLocalesResponse
// Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
type GoogleSearchIdeahubV1betaListAvailableLocalesResponse struct {
	AvailableLocales []GoogleSearchIdeahubV1betaAvailableLocale `json:"availableLocales,omitempty"`
	NextPageToken    *string                                    `json:"nextPageToken,omitempty"`
}
