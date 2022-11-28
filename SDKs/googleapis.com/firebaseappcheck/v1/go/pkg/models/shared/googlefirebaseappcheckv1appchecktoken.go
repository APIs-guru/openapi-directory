package shared

// GoogleFirebaseAppcheckV1AppCheckToken
// Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
type GoogleFirebaseAppcheckV1AppCheckToken struct {
	Token *string `json:"token,omitempty"`
	TTL   *string `json:"ttl,omitempty"`
}
