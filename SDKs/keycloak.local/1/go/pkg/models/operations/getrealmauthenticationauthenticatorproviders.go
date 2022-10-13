package operations

type GetRealmAuthenticationAuthenticatorProvidersPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmAuthenticationAuthenticatorProvidersRequest struct {
	PathParams GetRealmAuthenticationAuthenticatorProvidersPathParams
}

type GetRealmAuthenticationAuthenticatorProvidersResponse struct {
	ContentType                                                           string
	GetRealmAuthenticationAuthenticatorProviders2XxApplicationJSONObjects []map[string]interface{}
	StatusCode                                                            int64
}
