package shared

type FindMatchingLocationsRequest struct {
	LanguageCode     *string `json:"languageCode,omitempty"`
	MaxCacheDuration *string `json:"maxCacheDuration,omitempty"`
	NumResults       *int32  `json:"numResults,omitempty"`
}
