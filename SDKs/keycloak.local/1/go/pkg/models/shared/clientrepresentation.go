package shared

type ClientRepresentation struct {
	Access                             map[string]interface{}         `json:"access"`
	AdminURL                           *string                        `json:"adminUrl"`
	AlwaysDisplayInConsole             *bool                          `json:"alwaysDisplayInConsole"`
	Attributes                         map[string]interface{}         `json:"attributes"`
	AuthenticationFlowBindingOverrides map[string]interface{}         `json:"authenticationFlowBindingOverrides"`
	AuthorizationServicesEnabled       *bool                          `json:"authorizationServicesEnabled"`
	AuthorizationSettings              *ResourceServerRepresentation  `json:"authorizationSettings"`
	BaseURL                            *string                        `json:"baseUrl"`
	BearerOnly                         *bool                          `json:"bearerOnly"`
	ClientAuthenticatorType            *string                        `json:"clientAuthenticatorType"`
	ClientID                           *string                        `json:"clientId"`
	ConsentRequired                    *bool                          `json:"consentRequired"`
	DefaultClientScopes                []string                       `json:"defaultClientScopes"`
	DefaultRoles                       []string                       `json:"defaultRoles"`
	Description                        *string                        `json:"description"`
	DirectAccessGrantsEnabled          *bool                          `json:"directAccessGrantsEnabled"`
	Enabled                            *bool                          `json:"enabled"`
	FrontchannelLogout                 *bool                          `json:"frontchannelLogout"`
	FullScopeAllowed                   *bool                          `json:"fullScopeAllowed"`
	ID                                 *string                        `json:"id"`
	ImplicitFlowEnabled                *bool                          `json:"implicitFlowEnabled"`
	Name                               *string                        `json:"name"`
	NodeReRegistrationTimeout          *int32                         `json:"nodeReRegistrationTimeout"`
	NotBefore                          *int32                         `json:"notBefore"`
	OptionalClientScopes               []string                       `json:"optionalClientScopes"`
	Origin                             *string                        `json:"origin"`
	Protocol                           *string                        `json:"protocol"`
	ProtocolMappers                    []ProtocolMapperRepresentation `json:"protocolMappers"`
	PublicClient                       *bool                          `json:"publicClient"`
	RedirectUris                       []string                       `json:"redirectUris"`
	RegisteredNodes                    map[string]interface{}         `json:"registeredNodes"`
	RegistrationAccessToken            *string                        `json:"registrationAccessToken"`
	RootURL                            *string                        `json:"rootUrl"`
	Secret                             *string                        `json:"secret"`
	ServiceAccountsEnabled             *bool                          `json:"serviceAccountsEnabled"`
	StandardFlowEnabled                *bool                          `json:"standardFlowEnabled"`
	SurrogateAuthRequired              *bool                          `json:"surrogateAuthRequired"`
	WebOrigins                         []string                       `json:"webOrigins"`
}
