package shared

type GenericOauth2ModuleConfig struct {
	AccessTokenField     string       `json:"accessTokenField"`
	AuthorizeURL         string       `json:"authorizeUrl"`
	CallbackURL          string       `json:"callbackUrl"`
	Claims               *string      `json:"claims"`
	ClientID             string       `json:"clientId"`
	ClientSecret         string       `json:"clientSecret"`
	Desc                 string       `json:"desc"`
	EmailField           string       `json:"emailField"`
	ID                   string       `json:"id"`
	JwtVerifier          *interface{} `json:"jwtVerifier"`
	LoginURL             string       `json:"loginUrl"`
	LogoutURL            string       `json:"logoutUrl"`
	Name                 string       `json:"name"`
	NameField            string       `json:"nameField"`
	OidConfig            *string      `json:"oidConfig"`
	OtoroshiDataField    string       `json:"otoroshiDataField"`
	ReadProfileFromToken *bool        `json:"readProfileFromToken"`
	Scope                *string      `json:"scope"`
	SessionMaxAge        int32        `json:"sessionMaxAge"`
	TokenURL             string       `json:"tokenUrl"`
	Type                 string       `json:"type"`
	UseCookies           *bool        `json:"useCookies"`
	UseJSON              *bool        `json:"useJson"`
	UserInfoURL          string       `json:"userInfoUrl"`
}
