package shared

// GoogleFirebaseAppcheckV1DebugToken
// A *debug token* is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services.
type GoogleFirebaseAppcheckV1DebugToken struct {
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
	Token       *string `json:"token,omitempty"`
}
