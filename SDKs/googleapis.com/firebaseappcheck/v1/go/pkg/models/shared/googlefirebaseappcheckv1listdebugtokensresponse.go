package shared

type GoogleFirebaseAppcheckV1ListDebugTokensResponse struct {
	DebugTokens   []GoogleFirebaseAppcheckV1DebugToken `json:"debugTokens,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
