package shared

type FindMatchingLocationsRequest struct {
	LanguageCode     *string `json:"languageCode"`
	MaxCacheDuration *string `json:"maxCacheDuration"`
	NumResults       *int32  `json:"numResults"`
}
