package shared



type ClientRepresentation struct {
    Access map[string]interface{} `json:"access,omitempty"`
    AdminURL *string `json:"adminUrl,omitempty"`
    AlwaysDisplayInConsole *bool `json:"alwaysDisplayInConsole,omitempty"`
    Attributes map[string]interface{} `json:"attributes,omitempty"`
    AuthenticationFlowBindingOverrides map[string]interface{} `json:"authenticationFlowBindingOverrides,omitempty"`
    AuthorizationServicesEnabled *bool `json:"authorizationServicesEnabled,omitempty"`
    AuthorizationSettings *ResourceServerRepresentation `json:"authorizationSettings,omitempty"`
    BaseURL *string `json:"baseUrl,omitempty"`
    BearerOnly *bool `json:"bearerOnly,omitempty"`
    ClientAuthenticatorType *string `json:"clientAuthenticatorType,omitempty"`
    ClientID *string `json:"clientId,omitempty"`
    ConsentRequired *bool `json:"consentRequired,omitempty"`
    DefaultClientScopes []string `json:"defaultClientScopes,omitempty"`
    DefaultRoles []string `json:"defaultRoles,omitempty"`
    Description *string `json:"description,omitempty"`
    DirectAccessGrantsEnabled *bool `json:"directAccessGrantsEnabled,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    FrontchannelLogout *bool `json:"frontchannelLogout,omitempty"`
    FullScopeAllowed *bool `json:"fullScopeAllowed,omitempty"`
    ID *string `json:"id,omitempty"`
    ImplicitFlowEnabled *bool `json:"implicitFlowEnabled,omitempty"`
    Name *string `json:"name,omitempty"`
    NodeReRegistrationTimeout *int32 `json:"nodeReRegistrationTimeout,omitempty"`
    NotBefore *int32 `json:"notBefore,omitempty"`
    OptionalClientScopes []string `json:"optionalClientScopes,omitempty"`
    Origin *string `json:"origin,omitempty"`
    Protocol *string `json:"protocol,omitempty"`
    ProtocolMappers []ProtocolMapperRepresentation `json:"protocolMappers,omitempty"`
    PublicClient *bool `json:"publicClient,omitempty"`
    RedirectUris []string `json:"redirectUris,omitempty"`
    RegisteredNodes map[string]interface{} `json:"registeredNodes,omitempty"`
    RegistrationAccessToken *string `json:"registrationAccessToken,omitempty"`
    RootURL *string `json:"rootUrl,omitempty"`
    Secret *string `json:"secret,omitempty"`
    ServiceAccountsEnabled *bool `json:"serviceAccountsEnabled,omitempty"`
    StandardFlowEnabled *bool `json:"standardFlowEnabled,omitempty"`
    SurrogateAuthRequired *bool `json:"surrogateAuthRequired,omitempty"`
    WebOrigins []string `json:"webOrigins,omitempty"`
    
}

