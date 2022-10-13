package shared

type OAuthToken struct {
	Scope               *string `json:"scope"`
	ServiceAccountEmail *string `json:"serviceAccountEmail"`
}
