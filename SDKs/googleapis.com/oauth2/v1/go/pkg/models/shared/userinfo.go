package shared

type Userinfo struct {
	Email         *string `json:"email,omitempty"`
	FamilyName    *string `json:"family_name,omitempty"`
	Gender        *string `json:"gender,omitempty"`
	GivenName     *string `json:"given_name,omitempty"`
	Hd            *string `json:"hd,omitempty"`
	ID            *string `json:"id,omitempty"`
	Link          *string `json:"link,omitempty"`
	Locale        *string `json:"locale,omitempty"`
	Name          *string `json:"name,omitempty"`
	Picture       *string `json:"picture,omitempty"`
	VerifiedEmail *bool   `json:"verified_email,omitempty"`
}
