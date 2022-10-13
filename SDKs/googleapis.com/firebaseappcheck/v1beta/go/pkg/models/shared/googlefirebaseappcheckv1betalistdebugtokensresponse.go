package shared

type GoogleFirebaseAppcheckV1betaListDebugTokensResponse struct {
	DebugTokens   []GoogleFirebaseAppcheckV1betaDebugToken `json:"debugTokens"`
	NextPageToken *string                                  `json:"nextPageToken"`
}
