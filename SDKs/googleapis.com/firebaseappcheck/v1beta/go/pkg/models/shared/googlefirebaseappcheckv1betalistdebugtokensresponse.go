package shared

// GoogleFirebaseAppcheckV1betaListDebugTokensResponse
// Response message for the ListDebugTokens method.
type GoogleFirebaseAppcheckV1betaListDebugTokensResponse struct {
	DebugTokens   []GoogleFirebaseAppcheckV1betaDebugToken `json:"debugTokens,omitempty"`
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
}
