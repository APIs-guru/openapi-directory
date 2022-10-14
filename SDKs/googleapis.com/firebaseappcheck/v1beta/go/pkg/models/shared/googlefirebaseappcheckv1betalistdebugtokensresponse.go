package shared

type GoogleFirebaseAppcheckV1betaListDebugTokensResponse struct {
	DebugTokens   []GoogleFirebaseAppcheckV1betaDebugToken `json:"debugTokens,omitempty"`
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
}
