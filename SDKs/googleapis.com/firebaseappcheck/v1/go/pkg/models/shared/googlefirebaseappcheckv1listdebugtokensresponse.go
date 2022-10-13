package shared

type GoogleFirebaseAppcheckV1ListDebugTokensResponse struct {
	DebugTokens   []GoogleFirebaseAppcheckV1DebugToken `json:"debugTokens"`
	NextPageToken *string                              `json:"nextPageToken"`
}
