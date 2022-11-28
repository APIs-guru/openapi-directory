package shared

// OAuthToken
// Contains information needed for generating an [OAuth token](https://developers.google.com/identity/protocols/OAuth2). This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
type OAuthToken struct {
	Scope               *string `json:"scope,omitempty"`
	ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
}
