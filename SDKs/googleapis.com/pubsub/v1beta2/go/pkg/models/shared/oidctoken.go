package shared

// OidcToken
// Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect).
type OidcToken struct {
	Audience            *string `json:"audience,omitempty"`
	ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
}
