package shared

type IdentitytoolkitRelyingpartyEmailLinkSigninRequest struct {
	Email   *string `json:"email"`
	IDToken *string `json:"idToken"`
	OobCode *string `json:"oobCode"`
}
