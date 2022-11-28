package shared

// OidcToken
// Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). [Service account email](https://cloud.google.com/iam/docs/service-accounts) used for generating the OIDC token. For more information on setting up authentication, see [Push subscriptions](https://cloud.google.com/pubsub/docs/push).
type OidcToken struct {
	Audience            *string `json:"audience,omitempty"`
	ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
}
