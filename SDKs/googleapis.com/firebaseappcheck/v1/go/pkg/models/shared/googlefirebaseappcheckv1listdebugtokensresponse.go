package shared

// GoogleFirebaseAppcheckV1ListDebugTokensResponse
// Response message for the ListDebugTokens method.
type GoogleFirebaseAppcheckV1ListDebugTokensResponse struct {
	DebugTokens   []GoogleFirebaseAppcheckV1DebugToken `json:"debugTokens,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
