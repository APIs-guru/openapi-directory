package shared

type GenericOauth2ModuleConfig struct {
	AccessTokenField     string       `json:"accessTokenField"`
	AuthorizeURL         string       `json:"authorizeUrl"`
	CallbackURL          string       `json:"callbackUrl"`
	Claims               *string      `json:"claims,omitempty"`
	ClientID             string       `json:"clientId"`
	ClientSecret         string       `json:"clientSecret"`
	Desc                 string       `json:"desc"`
	EmailField           string       `json:"emailField"`
	ID                   string       `json:"id"`
	JwtVerifier          *interface{} `json:"jwtVerifier,omitempty"`
	LoginURL             string       `json:"loginUrl"`
	LogoutURL            string       `json:"logoutUrl"`
	Name                 string       `json:"name"`
	NameField            string       `json:"nameField"`
	OidConfig            *string      `json:"oidConfig,omitempty"`
	OtoroshiDataField    string       `json:"otoroshiDataField"`
	ReadProfileFromToken *bool        `json:"readProfileFromToken,omitempty"`
	Scope                *string      `json:"scope,omitempty"`
	SessionMaxAge        int32        `json:"sessionMaxAge"`
	TokenURL             string       `json:"tokenUrl"`
	Type                 string       `json:"type"`
	UseCookies           *bool        `json:"useCookies,omitempty"`
	UseJSON              *bool        `json:"useJson,omitempty"`
	UserInfoURL          string       `json:"userInfoUrl"`
}
