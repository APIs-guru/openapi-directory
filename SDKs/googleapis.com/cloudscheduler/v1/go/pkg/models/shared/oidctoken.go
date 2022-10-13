package shared

type OidcToken struct {
	Audience            *string `json:"audience"`
	ServiceAccountEmail *string `json:"serviceAccountEmail"`
}
