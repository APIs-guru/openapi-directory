package shared

type IdentitytoolkitRelyingpartyGetAccountInfoRequest struct {
	DelegatedProjectNumber *string  `json:"delegatedProjectNumber"`
	Email                  []string `json:"email"`
	IDToken                *string  `json:"idToken"`
	LocalID                []string `json:"localId"`
	PhoneNumber            []string `json:"phoneNumber"`
}
